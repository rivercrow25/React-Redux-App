import React from 'react';
import { connect } from 'react-redux'
import { getData } from './actions/actions'
import Dashboard from './components/DashBoard'

import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className='header'><h1>Studio Ghibli</h1></div>
      {props.isFetching ? (
        <Dashboard data={props.data} />
      )
        : (
          <button onClick={() => props.getData()}>Welcome!</button>
        )
      }
    </div>
  );
}

const mstp = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    hasInfo: state.hasInfo,
    info: state.info
  }
}

export default connect(mstp, { getData })(App);
