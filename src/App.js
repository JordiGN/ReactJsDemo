import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

class App extends React.Component {

//El estado son como las variables que puedes usar globalmente dentro de una misma clase
  state = {
    title: "",
    description: "",
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
  addItem = () =>{
      if (this.state.title == "" || this.state.description == "" ) {
        alert("tienes que escribir por lo menos un titulo o una description")
      }else{
        let newObject = {title:this.state.title, description:this.state.description}
        this.setState(state => ({
            title: "",
            description: "",
            items: [...state.items, newObject],//El spread operator (...) es un metodo que te permite obtener los elementos
            //de una estructura de datos, ya sea un arreglo o un objeto, los elementos los regresa como elementos, no como 
            //estructura
          }))
      }
    }

  delItem = (idToDel) =>{
    let newItems = [...this.state.items];
    newItems.splice(idToDel,1);
    //console.log("idToDel: "+idToDel);
    this.setState({
      items: newItems,
    })
  }

  editItem = (idToEdit, title, description) =>{
    //alert("si llega?")
    let newItems = [...this.state.items];
    newItems[idToEdit]={title:title, description:description}
    this.setState({
      items: newItems,
    })
  }
    
//Es importante que cuando se quiere modificar el State, se haga unicamente mediante la funcion setState, ya que esta es la 
//que manda llamar al ciclo de vida y permite que la modificacion haya sido de forma adecuada, de lo contrario, estaremos
//editanto las variables del estado pero la aplicacion no lo sabra.
  handleChangeTitle = (event) =>
    this.setState({title : event.target.value});

  handleChangeDescription = (event) =>
    this.setState({description : event.target.value});

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

    //Para poder editar los valores del status desde componentes hijos, conviene pasar como prop la funcion que los modifica
          //de esta forma podemos acceder a la funcion y modificarla
          //Para pasar parametros, se declara la funcion en el componente padre para recibir parametros, pero solo se mandan desde
          //el comonente hijo
    return (
        <div className="App">
          <input type="text" placeholder="titulo" value={this.state.title} onChange={this.handleChangeTitle} />

          <input type="text" placeholder="descripcion" value={this.state.description} onChange={this.handleChangeDescription} />
          
          <button type="submit" onClick={this.addItem} > Enviar </button >

          <List itemsSent={items} delFunction={this.delItem} editFunction={this.editItem}/>
        </div>
      );
    }  
  }

export default App;