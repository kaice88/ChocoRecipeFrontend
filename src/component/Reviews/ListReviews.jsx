import Review from "./Review";
import styles from "./ListReviews.module.css"
import App from '../rating/Rating'
import MyReview from "./MyReview";
function ListReviews(props) {
  return (
    <>
      <div className={styles['title-container']}>
        <div className={styles["title-review"]}>Reviews</div>
        <span className={styles['quantity-review']}>({props.review})</span>
        <div className={styles['rating-average']}>
          <App rate={props.rateAverage} allowHalf={true} disabled={true} />
        </div>
      </div>
      <div>
        <MyReview
          src={props.src}
          username={props.username}
          rate={props.rate}
          MyReview={props.myReview}
        ></MyReview>
      </div>
      <div className={styles["list-review"]}>
        {props.review_list.map((item, index) => (
          <Review className={styles.review}
            src={item.src}
            key={index}
            username={item.username}
            time={item.time}
            rate={item.rate}
            content={item.content}
          ></Review>
        ))}
      </div>
    </>
  );
}

export default ListReviews;
