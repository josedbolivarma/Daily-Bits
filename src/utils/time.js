import { types } from "../types/types";
import alfa from "./constants";

const{END_TIME, MINUTES, START_TIME} = alfa;


const ToMin = (ms) => {
    let min = ms*(1.0/1000)*(1.0/60);
    localStorage.setItem(MINUTES, min);
    return min;
};

const set = (type) => {
    let time;
    switch (type) {
        case types.start :
          time = localStorage.getItem(START_TIME)
            ? parseInt(localStorage.getItem(START_TIME))
            : Date.now();
        break;
        case types.end:
            time = Date.now();    
            break;
        default:
            break;
    }
    localStorage.setItem(`${type}-time`, time);
};

const calculate=()=>{
    let minutes = parseInt(localStorage.getItem(MINUTES)) || 0;
    let startTime = parseInt(localStorage.getItem(START_TIME)) || 0;
    let endTime = parseInt(localStorage.getItem(END_TIME)) || 0;
    let ms = endTime - startTime;

    minutes += ToMin(ms);

    if (minutes >= 60) {
        let hours = parseInt(ToMin(ms) / 60);
        return hours;
      } else {
        return 0;
      }
};
export {calculate , set};



