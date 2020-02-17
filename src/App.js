import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';


const TopicsList = () => {
  return (
    <div>
      <h1>TOPIC LIST</h1>
    </div>
  );
};

const TopicDetails = () => {
  return (
    <div> 
      <h1>TOPIC DETAIL PAGE</h1>
    </div>
  );
};
 
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='topics/:id' component={TopicDetails} />
      </Switch>
    </div>
  );
}

export default App;
  