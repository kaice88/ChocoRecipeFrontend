import { useState } from "react";
import { useSelector } from "react-redux";
import { json } from "react-router-dom";
import styles from "./NewReview.module.css";
import Rating from "../Rating/Rating";
import Button from "../UI/Button";
import { getAuthToken } from "../../utils/auth";

function NewReview(props) {
  const [showComment, setShowComment] = useState(false);
  const [textareaValue, setTextareaValue] = useState(props.myReview);
  const [rating, setRating] = useState(0);
  const user = useSelector((state) => state.user);
  const token = getAuthToken();
  const handleTextareaInput = (event) => {
    setTextareaValue(event.target.value);
  };
  const handleCancelClick = () => {
    setShowComment(false);
    setTextareaValue("");
  };
  const HandlerValue = (value) => {
    setRating(value);
  };
  const handleTextareaClick = () => {
    setShowComment(true);
  };
  const submitHandler = async () => {
    const review = {
      content: textareaValue,
      user_id: user.id,
      recipe: props.recipe_id,
      rating: rating,
    };
    console.log(review);
    const response = await fetch("http://127.0.0.1:8000/reviews/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(review),
    });
    if (!response.ok) {
      console.log(response.body);
      throw json({ message: "Could not load data" }, { status: 500 });
    }
  };
  return (
    <>
      <div className={styles["myreview-container"]}>
        <div className={styles["img-container"]}>
          <img className={styles.img} src={props.src} alt={props.alt} />
        </div>
        <div className={styles["content-container"]}>
          {showComment && (
            <div>
              <a href="#" className={styles.username}>
                {props.username}
              </a>

              <div className={styles.rate}>
                <Rating
                  HandlerValue={HandlerValue}
                  rate={props.rate}
                  disabled={false}
                />
              </div>
            </div>
          )}
          <textarea
            className={`${styles.myReview} ${
              textareaValue ? styles.expanded : ""
            }`}
            placeholder="Write your review or comment here"
            aria-label="Write your review or comment here"
            onClick={handleTextareaClick}
            onInput={handleTextareaInput}
            value={textareaValue}
          >
            {props.myReview}
          </textarea>
          {showComment && (
            <div className={styles.button}>
              <Button
                styles="save"
                value="Submit"
                onClick={submitHandler}
              ></Button>
              <Button value="Cancel" onClick={handleCancelClick}></Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NewReview;
