import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input
  } = useContext(Context);

  const handleSend = () => {
    onSent();
  };

  return (
    <div className="main">
      <div className="nav">
        <p>My Bot</p>
        <img src={assets.user_icon} alt='User Icon' />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p className='color-text'><span>Hello My dear user....</span></p>
              <p>How can I help  you today?</p>
            </div>
            {/* <div className="cards">
              <div className="card">
                <p>Suggest beautiful places for trip</p>
                <img src={assets.compass_icon} alt='' />
              </div>
              <div className="card">
                <p>Generate unit tests for the following C# function</p>
                <img src={assets.code_icon} alt='' />
              </div>
              <div className="card">
                <p>Help me with the homework</p>
                <img src={assets.bulb_icon} alt='' />
              </div>
              <div className="card">
                <p>Give me a beginner's guide to an activity</p>
                <img src={assets.message_icon} alt='' />
              </div>
            </div> */}
          </>
        ) : (
          <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt='' />
              <p>{recentPrompt}</p>
            </div>
            <div className='result-data'>
              <img src={assets.gemini_icon} style={{height:'50px'}}alt='' />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text' 
              placeholder='Enter prompt here'
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
             {input?  <img onClick={handleSend} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className='bottom-info'>
            This Chatbot may display inaccurate info, including about people, so double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
