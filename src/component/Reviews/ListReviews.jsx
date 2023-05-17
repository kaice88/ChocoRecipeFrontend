import { useState } from "react";
import Review from "./Review";
import styles from "./ListReviews.module.css";

function ListReviews(props) {
  const [visibleRows, setVisibleRows] = useState(3); // Số hàng đang hiển thị
  const handleShowMore = () => {
    setVisibleRows(prevVisibleRows => prevVisibleRows + 3); // Tăng số hàng đang hiển thị lên 3
  };
  const visibleRecipes = props.review_list.slice(0, visibleRows); // Lấy danh sách hàng hiển thị

  return (
    <>
      {/* <div className={styles["title-container"]}>
        <div className={styles["title-review"]}>Reviews</div>
        <span className={styles["quantity-review"]}>({props.review})</span>
        <div className={styles["rating-average"]}>
          <Rating rate={props.rateAverage} allowHalf={true} disabled={true} />
        </div>
      </div>
      <div>
        <NewReview
          src={props.src}
          username={props.username}
          rate={props.rate}
          MyReview={props.myReview}
        ></NewReview>
      </div> */}
      <div className={styles["list-review"]}>
        {visibleRecipes.map((item, index) => (
          <Review
            className={styles.review}
            src={item.src}
            key={index}
            username={item.username}
            time={item.time}
            rate={item.rate}
            content={item.content}
          ></Review>
        ))}
        {visibleRows < props.review_list.length && ( // Kiểm tra xem còn hàng nào để hiển thị
      <div className= {styles['show-container']}>
        <button className={styles.show} onClick={handleShowMore}> <i class="fa-solid fa-caret-down"></i> Read More Reviews</button>
      </div>
      )}
      </div>
    </>
  );
}

export default ListReviews;
