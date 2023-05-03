import styles from "./Button.module.css";
function Button(props) {
  return (
    <>
      <button
        className={
          props.styles ? `${styles.button} ${styles.save}` : styles.button
        }
        onClick={props.onClick}
      >
        {props.value}
      </button>
    </>
  );
}

export default Button;
