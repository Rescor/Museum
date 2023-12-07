import { NavLink } from "react-router-dom";
import styles from "./ItemTile.module.css";

export default function ItemTile({ item }) {
  const imageStyles = {
    background: `url(/assets/covers/${item.cover_image}) center/cover no-repeat rgba(0,0,0,0.8)`,
  };

  return <NavLink to={item.route} className={styles.item_tile}>
      <div className={styles.bg} style={imageStyles}></div>
      <h3>{item.title}</h3>
  </NavLink>
}
