import styles from './Rating.module.css'
import { Rate } from 'antd';
const App = (props) => <Rate
    className={styles.rate}
    disabled={props.disabled}
    allowHalf={props.allowHalf} // true: 1/2
    defaultValue={props.rate} />;
export default App;