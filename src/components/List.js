import React from 'react';
import Editform from './Editform';

class List extends React.Component{

	state = {
		editName: "",
		editDescription:"",
		index:"",
		editMode:false,
	}

	setEdit = (title, description,index) => {
		//alert("si en el setEdit "+title+" "+description);
		this.setState({editName:title,
			editDescription: description,
			index:index,
			editMode:true})
	}
	handleChangeTitle = (event) =>
    this.setState({editName : event.target.value});

  	handleChangeDescription = (event) =>
    this.setState({editDescription : event.target.value});

    quitEdit = () => {
    	this.setState({
    		editMode:false,
    	})
    }

	render(){
		const {itemsSent} = this.props;
		let title;
		let description;
		//siempre que se va a utilizar codigo JS se tiene que encerrar entre llaves para poderse renderear
		//Los argumentos de una funcion map incluyen, el elemento, el index del elemento, el arreglo completo
		//por eso al poner ambas propiedades entonces si podemos acceder a ellas y asi usarlas a nuestro beneficio
		//para mandar parametros y modificar los valores de estado del comonente padre se accede al prop
		//con la funcion y se asigna como arrow function y se pasa el parametro
		return (
			<div> 
				<ul>
					{itemsSent.map((item,index) => 
						<li key={item.title.toString()} >{item.title} {item.description}
							<button onClick={ () => this.setEdit(item.title,item.description,index)} >Editar</button>
							<button onClick={ () => this.props.delFunction(index)}>Eliminar</button>

						</li>
					)}
				</ul>

				<Editform title={this.state.editName} 
					description={this.state.editDescription} 
					index={this.state.index}
					editFunction={this.props.editFunction}
					changeTitle={this.handleChangeTitle}
					changeDescription={this.handleChangeDescription}
					editMode={this.state.editMode}
					quitEditMode={this.quitEdit}
				/>
			</div>
		);
	}

}
export default List;