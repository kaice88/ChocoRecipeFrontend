import { useState, useRef } from "react";
import { Avatar } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Button from "../UI/Button";
import styles from "./InfoHeader.module.css";
import Tab from "../UI/Tab";
import { userAction } from "../../store/user-slice";

import { Link, json, Form } from "react-router-dom";
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

  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [editingSuccess, setEditingSuccess] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleUsernameClick = () => {
    setEditing(true);
  };

  const handleUsernameBlur = () => {
    setEditingSuccess(true);
    console.log(username);
    setTimeout(() => {
      setEditingSuccess(false);
    }, 1500);
    setEditing(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <section className={styles["profile-image"]}>
          <div className={styles.ava} onClick={handleDivClick}>
            <Avatar
              size={100}
              src={user.image}
              className={styles.input}
            ></Avatar>
            <span className={styles.camera}>
              <i class="fa-solid fa-camera"></i>
            </span>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              hidden
            />
          </div>

          <div className={styles.button}>
            <Form action="/auth/logout" method="post">
              <Button type="submit" value="Log out"></Button>
            </Form>
          </div>
        </section>
        <section className={styles["profile-text"]}>
          {/* <div>
            {editing ? (
              <input
                type="text"
                className={styles.nameInput}
                value={username}
                onChange={handleUsernameChange}
                onBlur={handleUsernameBlur}
                autoFocus
              />
            ) : (
              <div className={styles['edit-container']}>
                <h2 className={styles.name} onClick={handleUsernameClick}>
                  {username}
                </h2>
                {editingSuccess && <span className={styles.successIcon}><i class="fa-solid fa-circle-check"></i></span>}
                <span className={styles.edit}>
                  <i class="fa-solid fa-pen"></i>
                </span>
              </div>
            )}
          </div> */}
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
