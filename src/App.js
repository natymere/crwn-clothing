import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => {
  return (
    <div>
      <h1>hat page</h1>
    </div>
  );
};

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
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />
      <Route path='topics/:id' component={TopicDetails} />
    </Switch>

    </div>
  );
}

export default App;
  