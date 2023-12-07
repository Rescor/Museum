import ItemTile from "./ItemTile/ItemTile";
import styles from "./ItemTiles.module.css";

export default function ItemTiles(props) {
  return <div className={styles.items_wrapper}>
    {props.items.map(item => <ItemTile item={item} key={item.id} />)}
  </div>
}
