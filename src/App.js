import logo from './logo.svg';
import './App.css';
import Resume from './resume';
import Notes from './notes';
import ReactGA from 'react-ga';
import React, { Component } from "react"

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function resume() {
  ReactGA.pageview('/resume');
  return (
    <div>
      <Resume />
    </div>
  );
}

function notes() {
  ReactGA.pageview('/notes');
  return (
    <div>
      <Notes />
    </div>
  );
}




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectetTab: "Resume"
    };
  }

  setTab(tab) {
    this.setState({ selectetTab: tab });
  }

  selectedTab() {
    switch (this.state.selectetTab) {
      case "Resume":
        return resume(this.setTab);
      case "Notes":
        return notes(this.setTab);
      default:
        return resume(this.setTab);
    }
  }
  initReactGA = () => {
    ReactGA.initialize('UA-210901522-1');
    ReactGA.pageview(window.location.pathname);
  };

  componentDidMount() {
    this.initReactGA();
  }


  render() {
    return (
      <div className="App">

        {this.selectedTab()}

      </div >

    );
  }
}



export default App;
