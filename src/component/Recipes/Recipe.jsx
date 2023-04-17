import styles from "./Recipe.module.css"
import App from "../rating/Rating";
import Like from "../Like/Like";

function Recipe(props) {
  return (
    <div className={`${styles.col} ${styles["recipe-border"]}`}>
      <div className={styles.row}>
        <img className={styles.img} src={props.src} alt={props.alt}/>
      </div>
      <div className={styles.details}>
        <div className={`${styles.row} ${styles.title}`}>
          <a href="#" className={`${styles['col-1']} ${styles.name}`}>{props.name}</a>
          <div className={styles['col-2']}>
          <Like className={styles.row} isLiked={props.isLiked}></Like>
            <div className={styles.row}>
              <span className={styles.like}>{props.like}</span>
            </div>
          </div>
        </div>
        <div className={`${styles.row} ${styles.rating}`}>
          <App className={styles['col-1']} rate={props.rate} />
          <div className={styles['col-2']}>
          <a href="#" className={styles.username}>{props.username}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;