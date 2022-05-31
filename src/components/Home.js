import React, { useEffect, useState } from "react";
import { useContext} from "react"
import { StatisticsContex } from "../context/StatisticsContext";
import {  getProgressApi } from "../helpers/progressInfo";
import { getStatisticsInfo } from "../helpers/statisticsInfo";
import { THeader, CCate, Categories, LogoI } from "../styleComponents/styleHome";
import alfa from "../utils/constants";
import CircleProgress from "./CircleProgress";
import Footer from "./Footer";

const {
    HTML_PROGRESS,
    CSS_PROGRESS,
    JS_PROGRESS,
    HTML_COMPLETE,
    CSS_COMPLETE,
    JS_COMPLETE,
} = alfa;

const Home=()=>{

  const [htmlProggres, setHtmlProgress] = useState(0);
  const [cssProgress, setCssProgress] = useState(0);
  const [jsProgress, setJsProgress] = useState(0);

  const loadProgress = (data) => {
    localStorage.setItem(HTML_PROGRESS, data?.htmlProgress || htmlProggres);
    localStorage.setItem(CSS_PROGRESS, data?.cssProgress || cssProgress);
    localStorage.setItem(JS_PROGRESS, data?.jsProgress || jsProgress);
    localStorage.setItem(HTML_COMPLETE, false);
    localStorage.setItem(CSS_COMPLETE, false);
    localStorage.setItem(JS_COMPLETE, false);
    setHtmlProgress(parseFloat(localStorage.getItem(HTML_PROGRESS)));
    setCssProgress(parseFloat(localStorage.getItem(CSS_PROGRESS)));
    setJsProgress(parseFloat(localStorage.getItem(JS_PROGRESS)));
  };

  getProgressApi().then((data)=>{
      loadProgress(data);
  });

  
  const {dispatch} = useContext(StatisticsContex);
  useEffect(()=>{
      let unmounted = true;
      if(unmounted){
          try{
            getStatisticsInfo().then((data) => {
                dispatch({
                  type: "GET",
                  payload: { ...data },
                });
              });
          }
          catch(error){}
      }
      return () => (unmounted=false);
    }, );

    return(
        <div>
            <main>
                <THeader>
                    Practica tus conocimientos en la categoria que prefieras.
                </THeader>
                <CCate>
                    <Categories id="html" to="/questions/html">
                        <CircleProgress percentage={htmlProggres}>
                            <LogoI 
                            id="html-image"
                            src="https://res.cloudinary.com/daalu/image/upload/v1649743816/Recursos_Daily/html_bmojie.svg"
                            alt="html"/>
                        </CircleProgress>
                        <p>HTML</p>
                    </Categories>
                </CCate>

                <CCate>
                    <Categories id="css" to="/questions/css">
                        <CircleProgress percentage={cssProgress}>
                            <LogoI 
                            id="css-image"
                            src="https://res.cloudinary.com/daalu/image/upload/v1649743853/Recursos_Daily/css_s4z3up.svg"
                            alt="css"/>
                        </CircleProgress>
                        <p>CSS</p>
                    </Categories>
                    <Categories id="js" to="/questions/js">
                        <CircleProgress percentage={jsProgress}>
                            <LogoI 
                            id="js-image"
                            src="https://res.cloudinary.com/daalu/image/upload/v1649743790/Recursos_Daily/js_nzqpcl.svg"
                            alt="js"/>
                        </CircleProgress>
                        <p>JS</p>
                    </Categories>
                </CCate>

                <CCate>
                    <Categories id="figma" to="/">
                        <CircleProgress percentage="0">
                            <LogoI 
                            id="figma-image"
                            src="https://res.cloudinary.com/daalu/image/upload/v1649743834/Recursos_Daily/figma_dau2bd.svg"
                            alt="figma"/>
                        </CircleProgress>
                        <p>FIGMA</p>
                    </Categories>
                    <Categories id="UX" to="/">
                        <CircleProgress percentage="0">
                            <LogoI 
                            id="ux-image"
                            src="https://res.cloudinary.com/daalu/image/upload/v1649743734/Recursos_Daily/ux_ogfvdp.svg"
                            alt="ux"/>
                        </CircleProgress>
                        <p>UX</p>
                    </Categories>
                </CCate>

            </main>
            <Footer/>
        </div>
    );
  };
 

















//     const {dispatch} = useContext(AuthContext);

//     const handleClick = () => {
//         dispatch(logout());

//         localStorage.clear()
//     }
//     return(
//         <div>Home
        
//         <button onClick={handleClick}>Logout</button>
//         </div>
//         )
// }

export default Home