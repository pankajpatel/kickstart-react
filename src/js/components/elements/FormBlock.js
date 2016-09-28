import React from 'react';
import Input from './Input';
import Button from './Button';
import Label from './Label';

export default class FormBlock extends React.Component {
  constructor(props) {
    super(props);
    this.getElement = this.getElement.bind(this);
  }

  getElement(){
    if(this.props.type == 'button' || this.props.type == 'submit'){
      return <Button className="btn" type={this.props.type} text={this.props.text} >{this.props.text}</Button>;
    } else {
      return <Input className="form-field" type={this.props.type} />;
    }
  }

  render(){
    return (
        <div className={this.props.className || 'form-block'}>
          <Label className="form-label">{this.props.label}</Label>
          {this.getElement()}
        </div>
      );
  }
}
