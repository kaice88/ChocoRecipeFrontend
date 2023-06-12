import { useState } from "react";
import { Link, json } from "react-router-dom";
import styles from "./Like.module.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { async } from "q";
import { getAuthToken } from "../../utils/auth";

function Like(props) {
  const [isLiked, setIsLiked] = useState(props.isLiked);

  let iconClass = "fa-regular fa-heart";
  if (isLiked) {
    iconClass = "fa-sharp fa-solid fa-heart";
  }
  const token = getAuthToken();
  const handleClick = async () => {
    setIsLiked(!isLiked);
    if (isLiked) {
      const response = await fetch("http://127.0.0.1:8000/recipes/favorites/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ recipe_id: props.id }),
      });
      if (!response.ok) {
        throw json({ message: "Could not fetch recipe" }, { status: 500 });
      }
    } else {
      const response = await fetch(
        "http://127.0.0.1:8000/recipes/favorites/" + props.id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        throw json({ message: "Could not fetch recipe" }, { status: 500 });
      }
    }
  };

  return (
    <div className={styles.like} onClick={handleClick}>
      <span className={styles["icon-border"]}>
        <i className={iconClass}></i>
      </span>
    </div>
  );
}

export default Like;
