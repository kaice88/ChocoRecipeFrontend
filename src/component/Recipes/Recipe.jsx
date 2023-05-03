import styles from "./Recipe.module.css";
import App from "../rating/Rating";
import Like from "../Like/Like";
import IconButton from "../UI/IconButton";
import { Link } from "react-router-dom";

function Recipe(props) {
  return (
    <div className={`${styles.col} ${styles["recipe-border"]}`}>
      <div className={styles.row}>
        <div className={styles["icon-container"]}>
          <div className={styles["icon-button"]}>
            <IconButton isDelete={false}></IconButton>
          </div>
          <div className={styles["icon-button"]}>
            <IconButton isDelete={true}></IconButton>
          </div>
        </div>
        <img className={styles.img} src={props.src} alt={props.alt} />
      </div>
      <div className={styles.details}>
        <div className={`${styles.row} ${styles.title}`}>
          <Link to="#" className={`${styles["col-1"]} ${styles.name}`}>
            {props.name}
          </Link>
          <div className={styles["col-2"]}>
            <Like isLiked={props.isLiked}></Like>
            <span className={styles.like}>{props.like}</span>
          </div>
        </div>
        <div className={`${styles.row} ${styles.rating}`}>
          <div className={styles["col-1"]}>
            <App rate={props.rate} />
          </div>
          <div className={styles["col-2"]}>
            <a href="#" className={styles.username}>
              {props.username}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
