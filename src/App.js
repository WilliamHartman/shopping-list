import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem, deleteItem } from './redux/reducer';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


class App extends Component {
  constructor(props){
    super(props);


    this.handleClick = this.handleClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(item){
    this.props.deleteItem(item);
  }

  handleClick(){
    this.props.addItem({name: this.refs.input.value, price: +this.refs.price.value});
  }

  render() {
    let listItems = this.props.list.map((item, i) => {
      return (
      <div key={i}>
        <p>{item.name} : ${item.price}</p>
        <FlatButton 
          hoverColor='red'
          onClick={() => this.deleteItem(item)} 
          label='X'/>
      </div>
      )
    })
    
    return (
      <div className="App">
        <input 
          ref='input'
          placeholder='New item'/>
        <input 
          ref='price'
          placeholder='Price'/>
        <RaisedButton onClick={this.handleClick} label='Add'/>
        {listItems}
        <div>
          <h3>Total: ${this.props.total}</h3>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    list: state.list,
    total: state.total
  }
}

export default connect(mapStateToProps, { addItem, deleteItem })(App);
