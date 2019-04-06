import React from 'react';


class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = { term : ''};
  }

  render() {
    return(
      <div>
        <input
        value = {this.state.term}
        onChange = {(event) => {this.setState({ term : event.target.value })}}/>
      </div>
    );
  }

  /*onInputChange(event)
  {
    console.log(event.target.value);
  }
  */
}

/*
//probable example for arrow function
const SearchBar = () => {
  return <input />;
}*/

/*
//proabale example of a function
const SearchBar = function (){
  return <input />;
}
//return <input onChange = {(event) => {console.log(event.target.value)}} />;
*/

export default SearchBar;
