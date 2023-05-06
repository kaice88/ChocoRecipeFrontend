import InfoHeader from "../component/Profile/InfoHeader";
import styles from "./Profile.module.css";
import { Outlet } from "react-router-dom";

function Profile() {
  return (
    <div className={styles.container}>
      <InfoHeader></InfoHeader>
      <Outlet></Outlet>
    </div>
  );
}

export default Profile;
