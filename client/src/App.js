/* eslint-disable no-unused-vars */
import { React, Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import { connect } from 'react-redux';
import * as actions from './redux/actions';

import Header from './components/Header';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import SurveyNew from './components/surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            {/* Header will always be displayed */}
            <Header />
            {/* Route for Landing Page */}
            <Route exact path="/" component={Landing} />
            {/* Route for Dashboard */}
            <Route exact path="/surveys" component={Dashboard} />
            {/* Route for New Survey Page */}
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

/**
 * @param mapStateToProps
 * @param actions that will be assigned to the component as props
 */
export default connect(null, actions)(App);
