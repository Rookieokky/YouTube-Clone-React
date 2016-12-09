import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const YOUTUBE_API_KEY = 'AIzaSyCUGD9uQczoM0kN3HoQaaII3Eo5x-baoqA';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: YOUTUBE_API_KEY, term: 'music'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
