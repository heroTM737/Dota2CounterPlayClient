import React, { Component } from 'react';
import HeroPicker from '../containers/hero_picker';
import CounterView from '../containers/counter_view';
import SearchBar from '../containers/search_bar';
import MatchPickView from '../containers/match_pick_view';
import { Tabs, Tab } from './tab';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ width: "50%" }}>
          <MatchPickView />
          <CounterView />
        </div>
        <div style={{ width: "50%" }}>
          <SearchBar />
          <HeroPicker />
        </div>
        <Tabs>
          <Tab title="Match View" component={<div>123</div>}></Tab>
          <Tab title="Hero View" component={<div>123</div>}></Tab>
        </Tabs>
      </div>
    );
  }
}
