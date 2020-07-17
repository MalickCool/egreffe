import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './store'

import './App.css';
import Subnav from './components/subnav/Subnav';
import ListeActe from './components/acte/Liste';
import Footer from './components/footer/Footer';
import Connexion from './components/connections/Connexion';
import Inscription from './components/connections/Inscription';
import Dashboard from './components/dashboard/Dashboard';

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

function App() {
  return (
      <Provider store={store} >
        <div className="App">
            <Router>

              <Subnav />
              
              <Route exact path="/" component={Connexion} />
              <Route exact path="/connexion" component={Connexion} />
              <Route exact path="/inscription" component={Inscription} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/listeActe" component={ListeActe} />


            </Router>
          
            <Footer />
        </div>
      </Provider>
  );
}

export default App;
