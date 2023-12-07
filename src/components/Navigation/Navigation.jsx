import { useTranslation } from "react-i18next";
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import LinkButton from "./LinkButton/LinkButton";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const { t } = useTranslation();

  const navLinks = [
    { name: t("main"), url: "https://netstalking.org/", target: "" },
    { name: t("forum"), url: "https://forum.netstalking.org/", target: "" },
    { name: t("museum"), url: "https://museum.netstalking.org/", target: "" },
    { name: t("radio_tower"), url: "http://radiotower.netstalking.org/", target: "" },
    { name: t("cloud"), url: "https://cloud.aww.xyz/index.php/s/CRdMg6zY78RsCeD", target: "_blank" },
    { name: t("gaming_hub"), url: "https://aww.xyz/games", target: "" },
    { name: t("channel"), url: "https://t.me/runetstalking", icon: faTelegram, target: "_blank" },
  ]

  return <div className={styles.nav_wrapper}>
    <div className={styles.nav}>
      {navLinks.map(link => <LinkButton link={link} key={link.url} />)}
    </div>
  </div>
}
