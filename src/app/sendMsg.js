import axios from "axios";

export const sendMessage = (message) => {
    // const TOKEN = "7054789005:AAFbTG7HWEaIElJxAHHKDVFCm1jvPzdOdcs";
    // const CHAT_ID = "-1002039962467";
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    axios
        .post(URL_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: message,
        })
        .catch((err) => { console.log(err) });
};