import React from 'react';
import NavLine from "./NavLine/NavLine";
import styles from "./ItemPageInfo.module.css";

export default function ItemPageInfo(props) {
  if (!props.item) return <div className={styles.item_wrapper}>
    <NavLine title="404" />
    <p className={styles.item_title}>404</p>
    <p className={styles.item_description}>Такой экспонат не найден.</p>
    <img src="/assets/err.jpg" alt="" className={styles.err_image} />
  </div>

  return <div className={styles.item_wrapper}>
    <NavLine title={props.item.title} />
    <p className={styles.item_title}>{props.item.title}</p>
    <p className={styles.item_description}>{props.item.description}</p>
    <div className={styles.links}>
      {props.item.prefix && <p>{props.item.prefix}</p>}
      {props.item.links.map((item, index) => (
        <React.Fragment key={item.url}>
          {index > 0 && <span className={styles.delimiter}>|</span>}
          <a href={item.url} target="_blank" rel="noreferrer">{item.name}</a>
        </React.Fragment>
      ))}
    </div>
  </div>
}
