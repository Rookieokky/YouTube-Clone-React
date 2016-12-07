import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyCUGD9uQczoM0kN3HoQaaII3Eo5x-baoqA';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
