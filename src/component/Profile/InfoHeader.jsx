import { useState, useRef } from "react";
import { Avatar } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Button from "../UI/Button";
import styles from "./InfoHeader.module.css";
import Tab from "../UI/Tab";
import { userAction } from "../../store/user-slice";

import { Link, json } from "react-router-dom";
const tab_list = [
  { value: "My Recipes", isActive: true, route: "my-recipes" },
  { value: "Favorite Recipes", isActive: false, route: "fav-recipes" },
  { value: "Change Password", isActive: false, route: "change-pwd" },
];
function InfoHeader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const inputRef = useRef(null);
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    console.log(file);
    // setSelectedImage(file);
    if (file) {
      console.log(file);
      const formData = new FormData();
      formData.append("image", file);
      formData.append("username", user.username);
      formData.append("email", user.email);
      const response = await fetch(`http://127.0.0.1:8000/users/${user.id}`, {
        method: "PUT",
        body: formData,
      });
      if (!response.ok) {
        throw json({ message: "Could not load data" }, { status: 500 });
      }
      dispatch(userAction.updateImage(`/images/user/${file.name}`));
    }
  };

  // const handleSubmit = async () => {

  // };

  const handleDivClick = () => {
    inputRef.current.click();
  };
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <section className={styles["profile-image"]}>
          <div onClick={handleDivClick}>
            <Avatar
              size={100}
              src={user.image}
              className={styles.input}
            ></Avatar>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              hidden
            />
          </div>

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
