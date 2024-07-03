import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import './Main.css';

const Main = () => {
  const { onSent, recentPrompt, showResult, resultdata, setInput, input, loading } = useContext(Context);

  const handleCardClick = (text) => {
    setInput(text);
  };

  return (
    <div className='main'>
      <div className='nav'>
        <p>Lekan.</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello!!</span></p>
              <p>How can I help you today</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => handleCardClick("What are some places I can go to this weekend")}>
                <p>What are some places I can go to this weekend</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick("Teach me about climate change")}>
                <p>Teach me about climate change</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick("What are some activities I can do with my kids this summer?")}>
                <p>What are some activities I can do with my kids this summer?</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick("Make my code neat")}>
                <p>Make my code neat</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Got a question?" />
            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
          </div>
          <p className="bottom-info">
            Heads up!! Lekan may display inaccurate info, so double-check with reliable sources.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
