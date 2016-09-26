import React from 'react';
import Header from '../elements/Header';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import Header from './components/pages/Home';

injectTapEventPlugin();

export default class App extends React.Component {
  render(){
    return (
        <div>
          <Header />
          {this.props.children}
        </div>
      );
  }
}
