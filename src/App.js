import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

class App extends React.Component {

  state = {
    name: "",
    items: [],
  }

  componentWillMount(){
    console.log("El componente se va a montar o algo asi");
  }

  componentDidMount(){
    console.log("el componente ya se monto");
  }

  addItem = () => {
    this.state.items.push(this.state.name);
    this.setState({
        name: "",
        items: this.state.items,
      })
  };

  // addItem = () => {
  //   console.log("si esta dando el click");
  // }

  handleChange = (event) =>{
    //console.log("event= "+ event.target.value);
    this.setState({name : event.target.value});
  };

  render(){
    return (
        <div className="App">
          <input type="text" value={this.state.name} onChange={this.handleChange} />
          <button type="submit" onClick={this.addItem} > Enviar </button >
          <List itemsSent={this.state.items} />
        </div>
      );
    }  
  }

export default App;