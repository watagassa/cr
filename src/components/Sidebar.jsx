import React from "react";
import { SidebarData } from "./SidebarData";
function Sidebar() {
  console.log(window.location.href);
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname == value.link ? "active" : ""}
              className="row"
              onClick={() => {
                window.location.pathname = value.link;
                console.log("これは現在のurlです" + window.location.href);
              }}
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Sidebar;