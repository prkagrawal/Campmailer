import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import SurveyNew from './components/surveys/SurveyNew';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
      </div>
    </BrowserRouter>
  );
}

export default App;
