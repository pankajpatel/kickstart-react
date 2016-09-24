import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './components/pages/Home';

injectTapEventPlugin();


export default class App extends React.Component {
  render(){
    return (
        <Header />
      );
  }
}
