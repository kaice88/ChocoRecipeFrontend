import styles from "./Recipe.module.css";
import App from "../rating/Rating";
import Like from "../Like/Like";
import IconButton from "../UI/IconButton";
import { Link, json } from "react-router-dom";

function Recipe(props) {
  return (
    <div className={`${styles.col} ${styles["recipe-border"]}`}>
      <div className={styles.row}>
        <div className={styles["icon-container"]}>
          <div className={styles["icon-button"]}>
            <IconButton isDelete={false} id={props.name}></IconButton>
          </div>
          <div className={styles["icon-button"]}>
            <IconButton isDelete={true} id={props.name}></IconButton>
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

          <div className={styles['col-1']}>
            <App rate={props.rate} allowHalf={true} disabled={true} />

    
          </div>
          <div className={styles["col-2"]}>
            <span className={styles.username}>{props.username}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
export async function action({ request }) {
  const method = request.method;
  const data = await request.formData();
  const recipeId = data.get("recipeId");
  // const response = await fetch(""+recipeId, {
  //   method: request.method,
  // });

  // if (!response.ok) {
  //   throw json(
  //     { message: "Could not delete event." },
  //     {
  //       status: 500,
  //     }
  //   );
  // }
  // return redirect("/events");
  return { method, recipeId };
}
