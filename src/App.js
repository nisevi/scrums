import _ from 'lodash';
import YTSearch from 'youtube-playlist-search';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.key = process.env.REACT_APP_YTB_API_KEY_DEV
    if (process.env.NODE_ENV === 'production') {
      this.key = process.env.REACT_APP_YTB_API_KEY_PROD
    }

    this.params = {
      part: 'snippet,contentDetails',
      playlistId: 'PLH99prTh-VPqO7ld0o2Sny6bLxpf80Js0',
      key: this.key
    };

    this.videoSearch('')
  }

  videoSearch(term) {
    YTSearch(term, this.params, (err, videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
