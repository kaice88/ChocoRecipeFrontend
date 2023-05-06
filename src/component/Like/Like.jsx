import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Like.module.css";
import "@fortawesome/fontawesome-free/css/all.css";

function Like(props) {
  const [isLiked, setIsLiked] = useState(props.isLiked);

  let iconClass = "fa-regular fa-heart";
  if (isLiked) {
    iconClass = "fa-sharp fa-solid fa-heart";
  }

  const handleClick = () => {
    setIsLiked(!isLiked);
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
