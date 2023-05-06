import styles from "./Introview.module.css"
import App from "../rating/Rating";
import Like from '../Like/Like'
function Introview(props) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles['info-container']}>
                    <div className={styles['name-container']}>
                        <h1 className={styles.name}>{props.name}</h1>
                    </div>
                    <div className={styles['user-container']}>
                        <a href="#" className={styles.username}>{props.username}</a>
                    </div>
                    <div className={styles['rate-container']}>
                        <div className={styles.rate}>
                            <App rate={props.rate} allowHalf={true} disabled={true} />
                        </div>
                        <span className={styles['quantity-review']}>({props.review})</span>
                    </div>
                    <div className={styles['summary-item-wrapper']}>
                        <div className={`${styles.col} ${styles['recipe-summary-item']}`}>
                            <span className={styles.unit}>{props.unitIngre}</span>
                            <span className={styles.value}>Ingredients</span>
                        </div>
                        <div className={`${styles.col} ${styles['recipe-summary-item']} ${styles.line}`}>
                            <span className={styles.unit}>{props.unitMin}</span>
                            <span className={styles.value}>Minutes</span>
                        </div>
                        <div className={`${styles.col} ${styles['recipe-summary-item']} ${styles.line}`}>
                            <span className={styles.unit}>{props.unitCalo}</span>
                            <span className={styles.value}>Calories</span>
                        </div>
                    </div>
                </div>
                <div className={styles['img-container']}>
                    <img className={styles.img} src={props.src} alt={props.alt} />
                    <div className={styles['like-container']}>
                        <div className={styles.like}>
                            <Like></Like>
                        </div>
                        <span className={styles['quantity-like']}>{props.like}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Introview;
