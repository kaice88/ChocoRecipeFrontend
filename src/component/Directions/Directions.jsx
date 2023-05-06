import styles from "./Directions.module.css"
function Directions(props) {
  return (
    <>
    <div className={styles["title-direc"]}>Directions</div>
    <div className={styles.directions}>{props.directions}</div>
    </>
  );
}

export default Directions;
