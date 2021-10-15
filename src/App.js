import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPage } from './pages';
import { Header, SudokuEasy, SudokuMedium,SudokuHard,Footer,Login,Register } from './components';
import { useDispatch } from 'react-redux';
import { loadUserDataAction } from './actions';
import { auth } from './firebase.js';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(loadUserDataAction(user));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/easysudoku" component={SudokuEasy} />
        <Route exact path="/mediumsudoku" component={SudokuMedium} />
        <Route exact path="/hardsudoku" component={SudokuHard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
