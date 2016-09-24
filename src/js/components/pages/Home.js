import React from 'react';
import Header from '../elements/Header';
import List from '../elements/List';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      leftNavOpen: false
    };

      this.toggleLeftNav = this.toggleLeftNav.bind(this)
  }

  toggleLeftNav(){
    console.log('fired', this.state.leftNavOpen)
    this.setState({ leftNavOpen: !this.state.leftNavOpen })
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  render(){
    return (
        <div>
          <Header leftNavHandler={this.toggleLeftNav} />
          <List type="grid" />
        </div>
      );
  }
}
