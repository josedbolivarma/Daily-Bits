import axios from "axios";
import alfa from "../utils/constants";
import { calculate } from "../utils/time";
import { getUserInfo } from "./userInfo";


const {TOTAL_RESPONSES, SUCCESS, FAILED}=alfa;

const baseUrl= "https://dayli-bit-ao.herokuapp.com/statistics";

const getStatisticsInfo = async () => {
    const [user] = await getUserInfo();
    const url = `${baseUrl}?userId=${user.id}`;
    const { data } = await axios.get(url);
    return data.find((item) => item.userId === user.id);
};

const createdOrUpdateStatistics = async () => {
    let statistics = await getStatisticsInfo();
    let currentData = {
      hours: statistics?.hours + calculate(),
      failedResponses: parseInt(localStorage.getItem(FAILED)) || 0,
      successResponses: parseInt(localStorage.getItem(SUCCESS)) || 0,
      totalResponse: parseInt(localStorage.getItem(TOTAL_RESPONSES)) || 0,
    };
    if (statistics) {
        const url = `${baseUrl}/${statistics.id}`;
        const { data } = await axios.patch(url, currentData);
        return data;
      } else {
        const [user] = await getUserInfo();
        const url = `${baseUrl}`;
        const { data } = await axios.post(url, {
          ...currentData,
          userId: user.id,
          hours: calculate(),
        });
        return data;
      }
    };

export {getStatisticsInfo, createdOrUpdateStatistics};