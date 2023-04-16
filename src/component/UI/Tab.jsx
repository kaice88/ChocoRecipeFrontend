import { NavLink } from "react-router-dom";
import styles from "./Tab.module.css";

function Tab(props) {
  return (
    <div className={styles.tab}>
      {props.tab_list.map((tab) => (
        <NavLink to={`/${tab.route}`}>
          <h3
            className={tab.isActive ? styles.active : ""}
            style={{
              "font-weight": `${props.weight}`,
              "font-size": `${props.size}`,
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
