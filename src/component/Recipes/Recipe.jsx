import styles from "./Recipe.module.css";
import Rating from "../Rating/Rating";
import Like from "../Like/Like";
import IconButton from "../UI/IconButton";
import { Link, json, redirect } from "react-router-dom";
import { getAuthToken } from "../../utils/auth";

function Recipe(props) {
  // const recipeObj = {
  //   user_id: props.id,
  //   title: props.title,
  //   calories: props.calories,
  //   cooking_time: props.cooking_time,
  //   directions: props.directions,
  //   ingredients:props.ingredients,
  //   image: props.ingredients,
  // };

  return (
    <div className={`${styles.col} ${styles["recipe-border"]}`}>
      <div className={styles.row}>
        {props.showIcon && (
          <div className={styles["icon-container"]}>
            <div className={styles["icon-button"]}>
              <IconButton isDelete={false} id={props.id}></IconButton>
            </div>
            <div className={styles["icon-button"]}>
              <IconButton isDelete={true} id={props.id}></IconButton>
            </div>
          </div>
        )}

        <img className={styles.img} src={props.src} alt={props.alt} />
      </div>
      <div className={styles.details}>
        <div className={`${styles.row} ${styles.title}`}>
          <Link
            to={`/${props.id}`}
            className={`${styles["col-1"]} ${styles.name}`}
          >
            {props.name}
          </Link>
          <div className={styles["col-2"]}>
            <Like isLiked={props.isLiked} id={props.id}></Like>
            <span className={styles.like}>{props.like}</span>
          </div>
        </div>
        <div className={`${styles.row} ${styles.rating}`}>
          <div className={styles["col-1"]}>
            <Rating rate={props.rate} allowHalf={true} disabled={true} />
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
  const token = getAuthToken();
  const response = await fetch("http://127.0.0.1:8000/recipes/" + recipeId, {
    method: request.method,
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  }
  return redirect("/profile/my-recipes");
}
