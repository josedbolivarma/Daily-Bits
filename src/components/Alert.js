import { useEffect, useState } from "react";
import { AlertDefault, AlertF, AlertSuccess, ButtonCD, ButtonCF, ButtonCS, MessageTD, MessageTF, MessageTS, ResponseF } from "../styleComponents/styleAlerts";
import alfa from "../utils/constants";

const {DEFAULT, FAILED, SUCCESS} = alfa;

const Alert = ({
  alerta,
  isVisible,
  handleComplete,
  handleContinue,
  handleReset,
})=>{
    const [show, setShow] = useState(false);
    useEffect(() => {
      setShow(isVisible);
    }, [isVisible]); 


   const buildAlert = (alerta) => {
     switch (alerta.type) {
       case SUCCESS:
         return (
           <>
             <AlertSuccess id="alerta" className={show ? "show" : ""}>
               <MessageTS id="message-title">{alerta.title}</MessageTS>
               <ButtonCS id="complete" onClick={handleComplete}>
                 {alerta.buttom}
               </ButtonCS>
             </AlertSuccess>
           </>
         );

        case FAILED:
            return(
                <>
                <AlertF id="alerta" className={isVisible ? "show": ""}>
                    <MessageTF id="message-title">{alerta.title}</MessageTF>
                    <ResponseF id="message-resResponseFailedonse">{alerta.response}</ResponseF>
                    <ButtonCF id="complete" onClick={handleContinue}>{alerta.buttom}</ButtonCF>
                </AlertF>
                </>
            );
        case DEFAULT:
            return(
                <>
                <AlertDefault id="alerta" className={isVisible ? "show": ""}>
                    <MessageTD id="message-title">{alerta.title}</MessageTD>
                    <ButtonCD id="complete" onClick={handleReset}>{alerta.buttom}</ButtonCD>
                </AlertDefault>
                </>
            );
       default:
         break;
      }
     };
     return <>{buildAlert(alerta)}</>;
   };

export default Alert;


