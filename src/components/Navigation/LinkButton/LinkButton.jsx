import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./LinkButton.module.css";

export default function LinkButton({ link }) {

  return <a href={link.url} className={styles.link_button} target={link.target}>
    {link.icon && <FontAwesomeIcon icon={link.icon} className={styles.icon} />}
    {link.name}
  </a>
}
