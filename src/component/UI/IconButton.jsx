import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./IconButton.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function IconButton(props) {
  const [isDelete, setIsDelete] = useState(props.isDelete);
  
  let iconClass = "fa-solid fa-pen"; 
  if (isDelete) {
    iconClass = "fa-solid fa-trash"; 
  }

  const handleClick = () => {
    if (isDelete) {
      // mở modal delete
      console.log("Delete clicked");
    } else {
      // mở modal edit
      console.log("Edit clicked");
    }
  };
  
  return (
    <div className={styles["but-container"]}>
    <div className={styles.iconButton} onClick={handleClick}>
      <span className={styles["icon-border"]}>
        <i className={iconClass}></i>
      </span>
    </div>
    </div>
  );
}

export default IconButton;
