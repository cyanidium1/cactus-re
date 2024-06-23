import axios from "axios";

export const sendMessage = (message) => {
    const TOKEN = "7288882293:AAERlr3h2Bc_964edkBtCATi6dEhDGoXRE0";
    const CHAT_ID = "-1002246310405";
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    axios
        .post(URL_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: message,
        })
        .catch((err) => { console.log(err) });
};