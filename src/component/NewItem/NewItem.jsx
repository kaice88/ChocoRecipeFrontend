import styles from "./NewItem.module.css";
import createImg from "../../assets/create.png";
function NewItem(props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button className={styles["create-button"]}>
          <img
            src={createImg}
            alt="create"
            className={styles["create-img"]}
          ></img>
          <span>{props.text}</span>
        </button>
      </div>
    </div>
  );
}

export default NewItem;
