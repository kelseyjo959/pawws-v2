import React from 'react';
import axios from 'axios';

export class Pets extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
			responseArray: [],
    };
    
    this.handleChange = this.handleChange.bind(this);
	}

  handleChange() {
    console.log("I was clicked");
    axios.get(`http://localhost:3000/getThings`, {
    	headers: {
    		"screenSize": window.innerHeight,
    	},
    }).then((res) => {
    	this.setState({ responseArray: res.data });
      });
  }


  render() {
    return (
      <div className="pets">
        <h1>{ "Hello World" }</h1>
        <h1>{ "Hello Pets" }</h1>
        <button onClick={this.handleChange}>{"push to get pets!"}</button>
        <div className="petList">
          <li data={this.state.responseArray} />
        </div>
      </div>
    );
  }
}

export default Pets;
