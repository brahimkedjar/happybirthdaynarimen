import React from "react";
import "./HappyBirthday.css"; // Custom styles for this component

const HappyBirthday = () => {
  return (
    <div className="birthday-container">
      <h1 className="birthday-message">Happy Birthdaaaayyy cutiee kol 3am w nti bkhiir nchlh</h1>
      <p className="message-detail">
        Just like you heal others with care and compassion, you heal my heart every day. 💖
      </p>
      <div className="floating-hearts">
        <span className="heart heart1"></span>
        <span className="heart heart2"></span>
        <span className="heart heart3"></span>
        <span className="heart heart4"></span>
        <span className="heart heart5"></span>
      </div>
      <div className="love-message">
        Your love is the best medicine! 💊💓
      </div>
      <div className="doctor-icons">
        <span>🩺</span> <span>💉</span> <span>🩹</span>
      </div>
      <button className="celebrate-btn">Celebrate Our Love</button>
    </div>
  );
};

export default HappyBirthday;
