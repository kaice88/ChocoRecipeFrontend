import { useState } from 'react';
import styles from './Review.module.css'
import App from '../rating/Rating'
import Button from '../UI/Button';
function Review(props) {
    const [showButton, setShowButton] = useState(false);
    const [textareaValue, setTextareaValue] = useState(props.content);
    const handleEditClick = () => {
        setShowButton(true);
        setTextareaValue(false);
    }
    const handleCancelClick = () => {
        setShowButton(false);
        setTextareaValue(props.content);
    };
    const handleSubmitClick = () => {
        // TODO: Gửi dữ liệu cập nhật lên server và cập nhật lại hiển thị
        setShowButton(false);
    };

    const handleDeleteClick = () => {
        const confirmed = window.confirm('Are you sure you want to delete this comment?');
        if (confirmed) {
            // TODO: Gửi yêu cầu xóa bình luận lên server
        }
    };
    const handleTextareaInput = (event) => {
        setTextareaValue(event.target.value);
    };
    const isUsername = props.username === 'Quynh Linh';
    return (
        <div className={styles['review-container']}>
            <div className={styles['img-container']}>
                <img className={styles.img} src={props.src} alt={props.alt} />
            </div>
            <div>
                <div className={styles['user-container']}>
                    <div>
                        <a href="#" className={styles.username}>
                            {props.username}
                        </a>
                    </div>
                    <span className={styles.time}>{props.time}</span>
                </div>
                <div className={styles.rate}>
                    {showButton
                        ? (<App rate={props.rate} disabled={false} />)
                        : (<App rate={props.rate} disabled={true} />)}
                </div>
                {
                    !showButton && <button
                        className={`${styles.button} ${isUsername ? styles.hoverable : ''}`}
                        onClick={handleEditClick}
                    >
                        <i class="fa-solid fa-pen"></i>
                        Edit
                    </button>
                }
                {!showButton &&
                    <div>
                        <span className={styles.content}>{props.content}</span>
                    </div>
                }
                {showButton && (
                    <div>
                        <textarea
                            className={`${styles.myReview} ${textareaValue ? styles.expanded : ''}`}
                            onInput={handleTextareaInput}
                        >{props.content}</textarea>
                        <div className={styles['button-edit']}>
                            <Button styles='save' value='Submit' onClick={handleSubmitClick}></Button>
                            <Button value='Cancel' onClick={handleCancelClick}></Button>
                            <Button value='Delete' onClick={handleDeleteClick}></Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Review;
