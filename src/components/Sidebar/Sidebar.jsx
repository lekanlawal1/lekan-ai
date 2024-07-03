import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import './Sidebar.css';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { previousPrompts, setRecentPrompt, onSent, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt); // Update recent prompt in context
    await onSent(prompt); // Call onSent function with the prompt
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended(prev => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="Menu Icon"
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="Plus Icon" />
          {extended && <p>New Chat</p>}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompts.map((item, index) => (
              <div onClick={() => loadPrompt(item)} className="recent-entry" key={index}>
                <img src={assets.message_icon} alt="Message Icon" />
                <p>{item.slice(0, 18)} ...</p>
              </div>
            ))}
          </div>
        )}
      </div>

      
        </div>
    
  );
}

export default Sidebar;
