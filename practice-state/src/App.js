import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './component/SearchBar';
import SearchResult from './component/SearchResult';
import { connect } from 'react-redux';

class App extends Component {
  render() { 
    return ( 
      <div>
        <SearchBar        />
       

        <SearchResult        />
      </div>
     );
  }
}


export default App;
