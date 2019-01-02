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
    axios.get(`http://localhost:3000/getPets`, {
    	headers: {
        "screenSize": window.innerWidth,
        "shelter": "",
        "count": 0,
    	},
    }).then((res) => {
      this.setState({ responseArray: res.data });
      console.log(this.state);
      });
  }


  render() {
    return (
      <div className="pets">
        <h1>{ "Hello World" }</h1>
        <h1>{ "Hello Pets" }</h1>
        <button onClick={this.handleChange}>{"push to get pets!"}</button>
        <div className="petList">
          <div>
            {/* {this.state.responseArray.map(response => (
            <div key={response}>
            </div>))
            } */}
            {this.state.responseArray.map((item,i) => <li key={i}>{item.name}</li>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Pets;
