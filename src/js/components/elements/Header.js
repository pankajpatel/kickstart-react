import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
        <header className="header">
          <div className="app-name">
            <h1>Kickstart React App</h1>
          </div>
          {this.props.children}
        </header>
      );
  }
}

