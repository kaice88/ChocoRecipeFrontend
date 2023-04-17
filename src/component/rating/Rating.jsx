import styles from './Rating.module.css'
import { Rate } from 'antd';
const App = (props) => <Rate className={styles.rate} disabled allowHalf defaultValue={props.rate} />;
export default App;