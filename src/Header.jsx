import React from "react";
import "./App.css";
import { Link } from 'react-router-dom';
//画像
import TwitterIcon from "./imgs/twitter.svg";
import InstagramIcon from "./imgs/instagram.svg";
import FacebookIcon from "./imgs/facebook.svg";

const Header = (props) => {
  console.log(JSON.stringify(props))
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
            <h1>hogehogeです</h1>
          </a>
        </div>
        <div className="header__inner__nav">
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <p>TOP</p>
                </Link>
              </li>
              <li>
                <Link to="/news">
                  <p>NEWS</p>
                </Link>
              </li>
              <li>
                <Link to="/store">
                  <p>STORE</p>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <p>ABOUT</p>
                </Link>
              </li>
              <li>
                <Link to="/guitar">
                  <p>GUITAR</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
