import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
        <header class="header">
          <div class="app-name">
            <h1>Kickstart React App</h1>
          </div>
          {this.props.children}
        </header>
      );
  }
}

