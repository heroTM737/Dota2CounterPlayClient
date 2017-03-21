import React, { Component } from 'react';
import HeroPicker from '../containers/hero_picker';
import CounterView from '../containers/counter_view';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroPicker />
        <CounterView />
      </div>
    );
  }
}
