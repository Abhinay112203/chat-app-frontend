import React from 'react';
import { BrowserRouter as  Router, Route} from 'react-router-dom'
import  './App.css';
import Join  from '../Join/Join'
import Chat from '../Chat/Chat';
const App = () => {
  return (
  <div className="main-app">
    <Router>
      <Route path='/' exact component={Join} />
      <Route path='/chat' exact component={Chat} />
    </Router>
  </div>
  );
};

export default App;
