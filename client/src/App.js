import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

const Header = () => {
  return (
    <h2>Header</h2>
  );
}

const Dashboard = () => {
  return (
    <h2>Dasboard</h2>
  );
}

const SurveyNew = () => {
  return (
    <h2>SurveyNew</h2>
  );
}

const Landing = () => {
  return (
    <h2>Landing</h2>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Landing} />
      </div>
    </BrowserRouter>
  );
}

export default App;
