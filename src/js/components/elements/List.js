import React from 'react';
import ListView from './ListView';
import GridView from './GridView';

import tilesData from 'js/data';


export default class List extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    if(this.props.type === 'grid'){
      return (
          <div className="gutter-free clearfix">
            <GridView data={tilesData} />
          </div>
        )
    } else {
      return (
          <div className="gutter-free clearfix">
            <ListView data={tilesData} />
          </div>
        )
    }
  }
}
