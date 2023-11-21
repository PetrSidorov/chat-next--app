import Image from "next/image";

export default function Home() {
  return (
    <div className="container container-flex home">
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
          <button>Friendlist</button>
          <button>Messagelist</button>
        </div>
      </aside>
      <main className="dialog">
        <div className="dialog__settings"></div>
        <div className="dialog__body">
          {/* messages goes here */}
          <div className="message">
            <div>
              <img src="" alt="avatar" />
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
        <div className="message-composer">
          <input
            type="text"
            className="message-composer__input"
            placeholder="Type a message..."
          />
          <button className="message-composer__send-btn">Send</button>
        </div>
      </main>
    </div>
  );
}
