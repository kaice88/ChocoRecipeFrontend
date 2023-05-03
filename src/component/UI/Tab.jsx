import { NavLink } from "react-router-dom";
import styles from "./Tab.module.css";

function Tab(props) {
  return (
    <div
      className={styles.tab}
      style={{ flexDirection: `${props.flexDirection}` }}
    >
      {props.tab_list.map((tab) => (
        <NavLink
          to={tab.route}
          key={tab.value}
          // <h3
          className={({ isActive }) =>
            isActive
              ? `${styles["tab-item"]} ${styles.active}`
              : styles["tab-item"]
          }
          style={{
            fontWeight: `${props.weight}`,
            fontSize: `${props.size}`,
            height: `${props.height}`,
          }}
        >
          {tab.value}
          {/* </h3> */}
        </NavLink>
      ))}
    </div>
  );
}

export default Tab;
