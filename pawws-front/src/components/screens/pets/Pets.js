import React from 'react';

export class Pets extends React.Component {
  render() {
    return (
      <div className="pets">
        <h1>{ "Hello World" }</h1>
        <h1>{ "Hello Pets" }</h1>
        <button>{"push to get pets!"}</button>
      </div>
    );
  }
}

export default Pets;
