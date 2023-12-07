import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styles from "./NavLine.module.css";

export default function NavLine(props) {
  const { t } = useTranslation();

  return <div className={props.page === "main" ? styles.navline_wrapper_main : styles.navline_wrapper}>
    <a href="https://netstalking.org/" className={styles.link}>{t("main")}</a>
    <span className={styles.delimiter}>/</span>
    {props.page === "main" ? <p>{t("museum")}</p> :
      <>
        <NavLink to={"../"} className={styles.link}>{t("museum")}</NavLink>
        <span className={styles.delimiter}>/</span>
        <p>{props.title}</p>
      </>
    }
  </div>
}
