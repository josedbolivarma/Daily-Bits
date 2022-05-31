import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import ProgressBarH from "../components/ProgressBar";
import ProgressBar from "../components/ProgressBar";
import Question from "../components/Questions";
import Cleaner from "../helpers/Cleaner";
import Live from "../helpers/Live";
import { createOrUpdateProggressApi, getProgressApi } from "../helpers/progressInfo";
import { createOrUpdateQuestionApi } from "../helpers/progressQuestionInfo";
import { createdOrUpdateStatistics } from "../helpers/statisticsInfo";
import { CheckButton, ContainerHead, Img, LiveText } from "../styleComponents/styleQuestion";
import alfa from "../utils/constants";
import { set } from "../utils/time";

const {
    CSS_COMPLETE,
    FAILED,
    HTML_COMPLETE,
    JS_COMPLETE,
    NOTIFICATION_FAILED,
    NOTIFICATION_SUCCESS,
    NOTIFICATION,
    RESPONSE,
    SUCCESS,
    TOTAL_RESPONSES,
    START_TIME,
  } = alfa;

  const QuestionsApp = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const [categorie, setCategorie] = useNavigate(category);
  
    const [live, setLive] = useState(0);
    const [alert, setAlert] = useState({});
    const [progress, setProgress] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
  
    const lives = new Live(categorie);
    const questionary = new Question(categorie);
    const [question, setQuestion] = useState(questionary.get());
    const clean = new Cleaner(categorie);
    const progressBar = new ProgressBarH();
  
    useEffect(() => {
      setCategorie(category);
  
      getProgressApi().then((data) => {
        if (data?.startTime < Date.now()) {
          localStorage.setItem(START_TIME, data.startTime);
        } else {
          set("start");
        }
        if (categorie === "html") {
          localStorage.setItem(HTML_COMPLETE, data?.htmlComplete || false);
        }
        if (categorie === "css") {
          localStorage.setItem(CSS_COMPLETE, data?.cssComplete || false);
        }
        if (categorie === "js") {
          localStorage.setItem(JS_COMPLETE, data?.jsComplete || false);
        }
      });
      console.log(JSON.parse(localStorage.getItem(`${categorie}-complete`)));
      if (JSON.parse(localStorage.getItem(`${categorie}-complete`))) {
        navigate.goBack();
      } else {
        setLive(lives.get());
        setProgress(progressBar.getProgress(categorie));
      }
    }, [question]);
  
    const nextQuestion = () => {
      const { options } = question;
      if (questionary.get().redirect) {
        return Promise.all([
          createdOrUpdateStatistics,
          createOrUpdateProggressApi,
        ]).then((data) => {
          clean.progress()
          navigate.goBack();
        });
      }
      setQuestion(questionary.get());
      if (question.type !== "3") {
        clean.selected(options);
      }
    };
  
    const handleComplete = () => {
      let num = questionary.length();
      let result = questionary.setState(question);
      if (result.state) {
        progressBar.load(num, categorie);
        let responsesSuccess = parseInt(localStorage.getItem(SUCCESS));
        localStorage.setItem(
          SUCCESS,
          responsesSuccess ? responsesSuccess + 1 : 1
        );
        let responses = parseInt(localStorage.getItem(TOTAL_RESPONSES));
        localStorage.setItem(TOTAL_RESPONSES, responses ? responses + 1 : 1);
        nextQuestion();
        setShowAlert(!showAlert);
      }
    };
  
    const handleContinue = () => {
      let count = lives.discount();
      let responsesFailed = parseInt(localStorage.getItem(FAILED));
      localStorage.setItem(FAILED, responsesFailed ? responsesFailed + 1 : 1);
      let responses = parseInt(localStorage.getItem(TOTAL_RESPONSES));
      localStorage.setItem(TOTAL_RESPONSES, responses ? responses + 1 : 1);
      const { options } = question;
      if (question.type !== "3") {
        clean.selected(options);
        clean.response();
      } else {
        document.getElementById("organized").innerHTML = "";
        options.map((opt) => {
          const element = document.getElementById(opt.name);
          element.style.display = "inline-block";
          element.style.backgroundImage = `url(../assets/svg/${opt.name}.svg)`;
          element.removeAttribute("disabled");
        });
      }
      if (count > 0) {
        setLive(count);
        setShowAlert(!showAlert);
      } else {
        setAlert({ ...NOTIFICATION });
      }
    };
    const handleReset = () => {
      clean.progress();
      setProgress(0);
      setLive(4);
      setQuestion(questionary.get());
      setShowAlert(!showAlert);
    };
  
    const check = () => {
      if (questionary.verify(question)) {
        setShowAlert(!showAlert);
        setAlert({ ...NOTIFICATION_SUCCESS });
      } else {
        const { options } = question;
        if (question.type === "3") {
          setShowAlert(!showAlert);
          setAlert({
            ...NOTIFICATION_FAILED,
            response: question.validationLabel,
          });
        } else {
          let correctAnswer = options.find((opt) => opt.isTrue);
          setShowAlert(!showAlert);
          setAlert({
            ...NOTIFICATION_FAILED,
            response: correctAnswer.label,
          });
          let option = options.find(
            (opt) => opt.item === localStorage.getItem(RESPONSE)
          );
          const itemSelect = document.getElementById(option.id);
          if (question.type === "1") {
            itemSelect.classList.add("option-select-failed");
            itemSelect.classList.add("radio-failed");
          } else if (question.type === "2") {
            itemSelect.classList.add("option-select-failed");
          }
        }
      }
    };
    const handleClose = async () => {
      await createdOrUpdateStatistics();
      await createOrUpdateProggressApi();
      await createOrUpdateQuestionApi(categorie);
      clean.progress();
      navigate.goBack();
    };
  
    return (
      <>
        <ContainerHead>
          <span id="close" onClick={async () => await handleClose()}>
            <Img src='https://res.cloudinary.com/daalu/image/upload/v1648833061/Recursos_Daily/Property_1_x_xxq9or.svg' alt="close" />
          </span>
          <ProgressBar percent={progress} />
          <span>
            <img src='https://res.cloudinary.com/daalu/image/upload/v1648833062/Recursos_Daily/Property_1_heart_lhzj68.svg' alt="heart" />
          </span>
          <LiveText id="life" className="">
            {live}
          </LiveText>
        </ContainerHead>
        <>{questionary.build(question)}</>
        <Alert
          alerta={alert}
          isVisible={showAlert}
          handleComplete={handleComplete}
          handleContinue={handleContinue}
          handleReset={handleReset}
        />
        <CheckButton id="check" onClick={check}>
          Comprobar
        </CheckButton>
      </>
    );
  };
  
export default QuestionsApp;
  