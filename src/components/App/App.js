import React, { Component } from 'react';
import './App.css';

import MyMenu from '../MyMenu/MyMenu'
import MyTab from '../Tab/Tab'

class App extends Component {
  createTab(key) {
    this.refs.iTab.add(key)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <i className="iconfont icon-onlyicon"></i>昂立CRM
        </div>
        <div className="App-container">
          <div className="App-nav">
            <MyMenu createTab={this.createTab.bind(this)}></MyMenu>
          </div>
          <div className="App-main">
            <div className="App-tabs">
              <MyTab ref="iTab"></MyTab>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
