"use client";
import { useEffect } from "react";
import { useState } from "react";

const Sidebar = () => {
  const [toggleState, setToggle] = useState("messages");

  function toggle(param: string) {
    setToggle(param);
    console.log(toggleState);
  }

  return (
    <>
      {toggleState == "messages" ? <h2>wat</h2> : <h1>even</h1>}
      <aside className="sidebar">
        <div className="search">
          <input type="text" className="search__input" placeholder="Search" />
        </div>
        <div className="chat-list">
          {/* messages goes here */}
          <div className="message">
            <div className="avatar avatar-letters">
              {/* first letter of name + firsdt letter of surname */}
              NB
              {/* <img src="" alt="avatar" /> */}
            </div>
            <div>
              <div className="message__info">
                <span className="message__name">Name</span>
                <span className="message__date">08:01</span>
              </div>
              <span className="message__excerpt">Text goes here</span>
            </div>
          </div>
          {/* messages goes here */}
        </div>
        <div className="sidebar-footer">
          <button onClick={() => toggle("friends")}>Friends</button>
          <button onClick={() => toggle("messages")}>Messages</button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
