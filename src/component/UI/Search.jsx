import styles from "./Search.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Search(props) {
  return (
    <>
      <div className={styles["search-container"]}>
        <span className={styles["icon-border"]}>
          <i className="fas fa-search"></i>{" "}
        </span>
        <input
          className={styles["search-input"]}
          type={props.type}
          value={props.value}
          placeholder={props.placeholder}
        />
        <span className={styles["search-border"]}></span>
      </div>
    </>
  );
}

export default Search;
