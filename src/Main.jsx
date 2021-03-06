import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Top, News, About, Store, Guitar } from './Component'

//画像

const Main = (props) => {
  console.log(props)
  return (
    <Switch>
      <Route path="/" exact children={<Top />} />
      <Route path="/news" children={<News />} />
      <Route path="/about" children={<About />} />
      <Route path="/store" children={<Store />} />
      <Route path="/guitar" children={<Guitar />} />
    </Switch>
  );
};

export default Main;
