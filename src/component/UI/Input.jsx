import styles from "./Input.module.css";

function Input(props) {
  return (
    <label htmlFor={props.label}>
      <div>
        <input
          className={styles.input}
          type={props.type}
          value={props.value}
          placeholder={props.placeholder}
          name={props.label}
          id={props.label}
        />
        <span className={styles["input-border"]}></span>
      </div>
      <span className={styles["input-label"]}>{props.label}</span>
    </label>
  );
}

export default Input;
