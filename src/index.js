import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/searchBar'
import VideoList from './components/videoList'
import VideoDetails from './components/VideoDetails'
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyAZzhL9_J_37eyM-UsWDM_npPHTK14Bsg8';

//make a component. the componen should produce some HTML code.
class App extends Component {
constructor(props){
  super(props);

  this.state = {
    videos : [],
    selectedVideo : null
   };

  YTSearch({ key : API_KEY, term : 'pokemon'}, (videos) =>{
    this.setState({
      videos : videos,
      selectedVideo : videos[0]
    });
  });
}

  render(){
    return (
      <div>
      <SearchBar />
      <VideoDetails video = {this.state.selectedVideo}/>
      <VideoList
        onVideoSelect = {selectedVideo => {this.setState({selectedVideo})}}
        videos = {this.state.videos}/>
      </div>
    );
  }
}

//render the component in the DOM or the html page
//
ReactDOM.render(<App />, document.querySelector('.container'));
