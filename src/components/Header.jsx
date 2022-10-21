import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  let localTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(localTime);

  const updateTime = () => {
    localTime = new Date().toLocaleTimeString();
    setTime(localTime);
  };
  setInterval(updateTime, 1000);

  return (
    <>
      <header className="news-header">
        <div className="news-logo-div">
          <h1 className="news-head1">
            Charu<span className="news-head2">Kshit </span>News
          </h1>
        </div>

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Headline">Headline</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <NavLink to="/ContectUs">ContectUs</NavLink>
          <li>
            <i className="fa-regular fa-circle-user"></i>
          </li>
        </ul>
      </header>

      <footer>
        <div className="footer">
          <h1 className="time">{time}</h1>
        </div>
      </footer>
    </>
  );
};

export default Header;
