import React from 'react';
import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
    <div>
      <h5>{this.props.animal.name}</h5>
      <img src={this.props.animal.image} alt={this.props.animal.name} width='300px' />
      <span>{this.props.animal.specie}</span>
    </div>
    ) 
  }
}
