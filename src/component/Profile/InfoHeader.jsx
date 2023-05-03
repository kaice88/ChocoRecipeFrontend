import { Avatar } from "antd";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import styles from "./InfoHeader.module.css";
import Tab from "../UI/Tab";
import { Link } from "react-router-dom";
const tab_list = [
  { value: "My Recipes", isActive: true, route: "my-recipes" },
  { value: "Favorite Recipes", isActive: false, route: "fav-recipes" },
  { value: "Change Password", isActive: false, route: "change-pwd" },
];
function InfoHeader() {
  const user = useSelector((state) => state.user);
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <section className={styles["profile-image"]}>
          <Link to="my-recipes" className={styles.avatar}>
            <Avatar size={100} src={user.image}></Avatar>
          </Link>
          <div className={styles.button}>
            <Button value="Log out"></Button>
          </div>
        </section>
        <section className={styles["profile-text"]}>
          <div>
            <h2 className={styles.name}>{user.username}</h2>
          </div>
          <div>
            <h2 className={styles.email}>{user.email}</h2>
          </div>
        </section>
      </div>
      <div className={styles.tab}>
        <Tab
          className={styles.tab}
          tab_list={tab_list}
          weight="400"
          size="16px"
          flexDirection="row"
          height="25px"
        ></Tab>
      </div>
    </div>
  );
}

export default InfoHeader;
