import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCDCkv6EWPJtwnP0eTHAyUmyJbKtx_QtBU'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };


    YTSearch({key: API_KEY, term: 'agileventures'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
