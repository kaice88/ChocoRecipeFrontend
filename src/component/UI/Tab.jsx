import { NavLink } from "react-router-dom";
import styles from "./Tab.module.css";

function Tab(props) {
  return (
    <div
      className={styles.tab}
      style={{ flexDirection: `${props.flexDirection}` }}
    >
      {props.tab_list.map((tab) => (
        <NavLink to={`/auth/${tab.route}`}>
          <h3
            className={tab.isActive ? styles.active : ""}
            style={{
              fontWeight: `${props.weight}`,
              fontSize: `${props.size}`,
              height: `${props.height}`,
            }}
            key={tab.value}
          >
            {tab.value}
          </h3>
        </NavLink>
      ))}
    </div>
  );
}

export default Tab;
