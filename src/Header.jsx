import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Top, News, About, Store, Guitar } from './Component'
//画像
import TwitterIcon from "./imgs/twitter.svg";
import InstagramIcon from "./imgs/instagram.svg";
import FacebookIcon from "./imgs/facebook.svg";

const Header = (props) => {
  console.log(props)
  return (
    <BrowserRouter>
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
            <Switch>
              <Route path="/" children={<Top />} />
              <Route path="/news" children={<News />} />
              <Route path="/about" children={<About />} />
              <Route path="/store" children={<Store />} />
              <Route path="/guitar" children={<Guitar />} />
            </Switch>
          </div>
        </div>
      </header>
    </BrowserRouter>
  );
};

export default Header;
