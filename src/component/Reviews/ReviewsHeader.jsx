import styles from "./ReviewsHeader.module.css";
import Rating from "../Rating/Rating";

function ReviewsHeader(props) {
  return (
    <div className={styles["title-container"]}>
      <div className={styles["title-review"]}>Reviews</div>
      <span className={styles["quantity-review"]}>{props.quantity}</span>
      <div className={styles["rating-average"]}>
        <Rating rate={props.rateAverage} allowHalf={true} disabled={true} />
      </div>
    </div>
  );
}

export default ReviewsHeader;
