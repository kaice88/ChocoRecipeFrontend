import { useState } from 'react';
import styles from './MyReview.module.css'
import App from '../rating/Rating'
import Button from '../UI/Button';
function MyReview(props) {

  const [showComment, setShowComment] = useState(false);
  const [textareaValue, setTextareaValue] = useState(props.myReview);

  const handleTextareaInput = (event) => {
    setTextareaValue(event.target.value);
  };
  const handleCancelClick = () => {
    setShowComment(false);
    setTextareaValue('');
  };
  const handleTextareaClick = () => {
    setShowComment(true);
  };

  return (
    <>
      <div className={styles['myreview-container']}>
        <div className={styles['img-container']}>
          <img className={styles.img} src={props.src} alt={props.alt} />
        </div>
        <div className={styles['content-container']}>
          {showComment && (
            <div>
              <a href="#" className={styles.username}>
                {props.username}
              </a>

              <div className={styles.rate}>
                <App
                  rate={props.rate}
                  disabled={false}
                />
              </div>
            </div>
          )}
          <textarea
            className={`${styles.myReview} ${textareaValue ? styles.expanded : ''}`}
            placeholder="Write your review or comment here"
            aria-label="Write your review or comment here"
            onClick={handleTextareaClick}
            onInput={handleTextareaInput}
            value={textareaValue}
          >{props.myReview}</textarea>
          {showComment && (
            <div className={styles.button}>
              <Button styles='save' value='Submit'></Button>
              <Button value='Cancel' onClick={handleCancelClick}></Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyReview;
