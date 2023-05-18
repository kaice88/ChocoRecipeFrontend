import { useState } from "react";
import styles from "./Search.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Search(props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      props.onEnter(inputValue);
    }
  };
  return (
    <>
      <div className={styles["search-container"]}>
        <span className={styles["icon-border"]}>
          <i className="fas fa-search"></i>{" "}
        </span>
        <input
          className={styles["search-input"]}
          type={props.type}
          placeholder={props.placeholder}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <span className={styles["search-border"]}></span>
      </div>
    </>
  );
}

export default Search;
