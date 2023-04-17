import { NavLink } from "react-router-dom";
import styles from "./Like.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Like(props) {
  let iconClass = "fa-regular fa-heart"; 
  if (props.isLiked) {
    iconClass = "fa-sharp fa-solid fa-heart"; 
  }

  // function handleLikeClick() {
  //   props.onClick();
  // }
  
  return (
    <div className={styles.like}>
      <span className={styles["icon-border"]}>
        <i className={iconClass}></i>
      </span>
    </div>
  );
}

export default Like;