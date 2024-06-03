import { useEffect } from "react";
import useStore from "../store/useStore";

const ZustandProvider = ({ children }) => {
  const { setLanguage } = useStore();

  useEffect(() => {
    // Установка языка по умолчанию, можно также добавить логику для определения языка пользователя
    setLanguage("ru");
  }, [setLanguage]);

  return children;
};

export default ZustandProvider;
