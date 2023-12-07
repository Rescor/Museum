import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSelector.module.css";

export default function LanguageSelector(props) {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage)
  };

  const position = {}
  position[props.position] = "10px";

  return <div className={styles.select_wrapper} style={position}>
    {i18n.language === "be" && <img src="/assets/bel.png" alt="bel_ico" />}
    <select onChange={handleChangeLanguage} defaultValue={i18n.language} className={styles.select} id="select">
      <option value="be">Бел</option>
      <option value="en">Eng</option>
      <option value="ru">Рус</option>
    </select>
  </div>
};
