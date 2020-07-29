import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

class App extends React.Component {

//El estado son como las variables que puedes usar globalmente dentro de una misma clase
  state = {
    name: "",
    items: [],
  }

  componentWillMount(){
    //console.log("El componente se va a montar o algo asi");
  }

  componentDidMount(){
    //console.log("el componente ya se monto");
  }
//Las arrowfunctions no necesitan tener llaves para encerrar el codigo siempre y cuando solamente retornen un elemento
//En caso de que tuvieran mas de un elemento entonces si es necesario ponerlo entre llaves para que lo abarque correctamente
//similar a los ifs
  addItem = () =>
    this.setState(state => ({
        name: "",
        items: [...state.items, state.name],//El spread operator (...) es un metodo que te permite obtener los elementos
        //de una estructura de datos, ya sea un arreglo o un objeto, los elementos los regresa como elementos, no como 
        //estructura
      }))
//Es importante que cuando se quiere modificar el State, se haga unicamente mediante la funcion setState, ya que esta es la 
//que manda llamar al ciclo de vida y permite que la modificacion haya sido de forma adecuada, de lo contrario, estaremos
//editanto las variables del estado pero la aplicacion no lo sabra.
  handleChange = (event) =>
    this.setState({name : event.target.value});

  render(){
    //las variables deben de estar dentro de funciones, ya sea funciones de la clase o dentro del metodo render
    //exise una forma de obtener los valores de un objeto o arreglo mediante desconstruccion
    //esto se hace en una variable, ya sea const o let, en la cual se asigna el valor
    //en el caso de los objetos, se hace referencia al objeto entre corchetes
    const {items} = this.state;
    //Para renombrar la propiedad del objeto se hace una asignacion como si fuera llave/valor
    //const {items: nuevonombre} = this.state;
    //en el caso de los arreglos se hace referencia a la posicion del elemento que deseamos tener, ahi mismo se puede
    //renombrar la variable
    //const [fv,...aa] = array;

    //ya que tenemos la variable descrontruida podemos usarla y pasarla como prop

    //las funciones que se embeban en el HTML deben de ir sin parentesis, ya que cuando lo llevan la funcion se ejecuta
    return (
        <div className="App">
          <input type="text" value={this.state.name} onChange={this.handleChange} />
          <button type="submit" onClick={this.addItem} > Enviar </button >
          <List itemsSent={items} />
        </div>
      );
    }  
  }

export default App;