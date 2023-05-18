import { useState } from "react";
import styles from "./Review.module.css";
import Rating from "../Rating/Rating";
import Button from "../UI/Button";
import { useHistory } from "react-router-dom";
import { json, redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthToken } from "../../utils/auth";
function Review(props) {
  const [showButton, setShowButton] = useState(false);
  const [render, setRender] = useState(false);
  const [textareaValue, setTextareaValue] = useState(props.content);
  const [rating, setRating] = useState(props.rate);
  const user = useSelector((state) => state.user);

  const token = getAuthToken();
  const handleEditClick = () => {
    setShowButton(true);
  };
  const handleCancelClick = () => {
    setShowButton(false);
    setTextareaValue(props.content);
  };
  const HandlerValue = (value) => {
    setRating(value);
  };
  const handleSubmitClick = async () => {
    setShowButton(false);
    const review = {
      content: textareaValue,
      user_id: user.id,
      recipe: props.recipe_id,
      rating: rating,
    };
    console.log(review);
    window.location.reload();
    const response = await fetch(
      `http://127.0.0.1:8000/reviews/${props.recipe_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(review),
      }
    );

    if (!response.ok) {
      console.log(response.body);
      throw json({ message: "Could not load data" }, { status: 500 });
    }
  };

  const handleDeleteClick = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (confirmed) {
      const response = await fetch(
        `http://127.0.0.1:8000/reviews/${props.recipe_id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        console.log(response.body);
        throw json({ message: "Could not load data" }, { status: 500 });
      }
      window.location.reload();
    }

    // return redirect(`/${props.recipe_id}`);
  };
  const handleTextareaInput = (event) => {
    setTextareaValue(event.target.value);
  };
  const isUsername = props.username === user.username;
  return (
    <div className={styles["review-container"]}>
      <div className={styles["img-container"]}>
        <img className={styles.img} src={props.src} alt={props.alt} />
      </div>
      <div>
        <div className={styles["user-container"]}>
          <div>
            <a href="#" className={styles.username}>
              {props.username}
            </a>
          </div>
          <span className={styles.time}>{props.time}</span>
        </div>
        <div className={styles.rate}>
          {showButton ? (
            <Rating
              rate={rating}
              disabled={false}
              HandlerValue={HandlerValue}
            />
          ) : (
            <Rating rate={props.rate} disabled={true} />
          )}
        </div>
        {!showButton && (
          <button
            className={`${styles.button} ${isUsername ? styles.hoverable : ""}`}
            onClick={handleEditClick}
          >
            <i className="fa-solid fa-pen"></i>
            Edit
          </button>
        )}
        {!showButton && (
          <div>
            <span className={styles.content}>{props.content}</span>
          </div>
        )}
        {showButton && (
          <div>
            <textarea
              className={`${styles.myReview} ${
                textareaValue ? styles.expanded : ""
              }`}
              onInput={handleTextareaInput}
            >
              {props.content}
            </textarea>
            <div className={styles["button-edit"]}>
              <Button
                styles="save"
                value="Submit"
                onClick={handleSubmitClick}
              ></Button>
              <Button value="Cancel" onClick={handleCancelClick}></Button>
              <Button value="Delete" onClick={handleDeleteClick}></Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Review;
