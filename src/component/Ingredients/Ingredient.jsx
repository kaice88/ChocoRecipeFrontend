import styles from './Ingredient.module.css'
function Ingredient(props) {
    return (
        <div className={styles['line-ingre']}>
            <div>
                <span className={styles['dot-ingre']}>
                    <i className="fa-solid fa-circle"></i>
                </span>
            </div>
            <li className={styles.ingredient}>
                <span className={styles['sub-ingre']}>{props.quantity}</span>
                <span className={styles['sub-ingre']}>{props.unit}</span>
                <span className={styles['sub-ingre']}>{props.name}</span>
            </li>
        </div>
    );
}

export default Ingredient;