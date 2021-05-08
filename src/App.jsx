import React from "react";
import "./App.css";

//画像
import TwitterIcon from "./imgs/twitter.svg";
import InstagramIcon from "./imgs/instagram.svg";
import FacebookIcon from "./imgs/facebook.svg";

const App = () => {
  return (
    <header>
      <div className="header__inner">
        <div className="header__inner__sns">
          <a href="https://twitter.com/e_san_desuyo">
            <img src={TwitterIcon} alt="" />
          </a>
          <a href="https://www.soumu.go.jp/">
            <img src={InstagramIcon} alt="" />
          </a>
          <a href="https://www.johnnys-net.jp/">
            <img src={FacebookIcon} alt="" />
          </a>
        </div>
        <div className="header__inner__logo">
          <a href="">
            <h1>headerです</h1>
          </a>
        </div>
        <div className="header__inner__nav">
          <nav>
            <ul>
              <li>
                <a href="">
                  <p>TOP</p>
                </a>
              </li>
              <li>
                <a href="">
                  <p>NEWS</p>
                </a>
              </li>
              <li>
                <a href="">
                  <p>STORE</p>
                </a>
              </li>
              <li>
                <a href="">
                  <p>ABOUT</p>
                </a>
              </li>
              <li>
                <a href="">
                  <p>GUITAR</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default App;
