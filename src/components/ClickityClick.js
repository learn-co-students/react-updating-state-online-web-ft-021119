import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue'
    };
  }
 
  // handleClick = () => {
  //   this.setState({
  //   	hasBeenClicked: true
  //   })
  //   console.log(this.state.hasBeenClicked);
    // shows that state changes happen asynchronously by returning false
  // };

  handleClick = () => {
  this.setState({
    hasBeenClicked: true
  }, () => console.log(this.state.hasBeenClicked)) // prints true with the callback
}
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;
