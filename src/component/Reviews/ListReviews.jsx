import { useState } from "react";
import Review from "./Review";
import styles from "./ListReviews.module.css";

function ListReviews(props) {
  const [refresh, setRefresh] = useState(false);

  const handleEventInChild = () => {
    // Thực hiện các hành động cần thiết khi sự kiện xảy ra trong component con
    // Ví dụ: thay đổi giá trị của biến refresh ở component cha
    setRefresh(!refresh);
  };
  const FormatDate = (dateString) => {
    const inputDate = new Date(dateString);
    const currentDateTime = new Date();

    // Lấy thời gian hiện tại và thời gian từ chuỗi đầu vào
    const currentTime = currentDateTime.getTime();
    const inputTime = inputDate.getTime();

    // Tính khoảng thời gian chênh lệch bằng giây
    const timeDifferenceInSeconds = Math.floor(
      (currentTime - inputTime) / 1000
    );

    if (timeDifferenceInSeconds < 60) {
      return "a few seconds ago";
    } else if (timeDifferenceInSeconds < 60 * 60) {
      const minutes = Math.floor(timeDifferenceInSeconds / 60);
      return `${minutes}m`;
    } else if (timeDifferenceInSeconds < 24 * 60 * 60) {
      const hours = Math.floor(timeDifferenceInSeconds / (60 * 60));
      return `${hours}h`;
    } else {
      const days = Math.floor(timeDifferenceInSeconds / (24 * 60 * 60));
      return `${days}d`;
    }
  };

  const [visibleRows, setVisibleRows] = useState(3); // Số hàng đang hiển thị
  const handleShowMore = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 3); // Tăng số hàng đang hiển thị lên 3
  };
  const visibleRecipes = props.review_list.slice(0, visibleRows); // Lấy danh sách hàng hiển thị

  return (
    <>
      <div className={styles["list-review"]}>
        {visibleRecipes.map((item, index) => (
          <Review
            onReset={handleEventInChild}
            className={styles.review}
            src={`http://127.0.0.1:8000${item.user_image}`}
            key={index}
            username={item.username}
            time={FormatDate(item.last_edited)}
            rate={item.rating}
            content={item.content}
            recipe_id={item.id}
          ></Review>
        ))}
        {visibleRows < props.review_list.length && ( // Kiểm tra xem còn hàng nào để hiển thị
          <div className={styles["show-container"]}>
            <button className={styles.show} onClick={handleShowMore}>
              {" "}
              <i class="fa-solid fa-caret-down"></i> Read More Reviews
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ListReviews;
