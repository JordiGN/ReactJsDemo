import React from 'react';

class List extends React.Component{

	state = {
		name: "",
		itemsSentState: [],
	}

	delItem = () => {
		console.log("si entra el delitem")
		// this.setState({
		// 	//itemsSentState: [...itemsSent]
		// })
	}

	render(){
		const {itemsSent} = this.props;
		console.log(itemsSent);
		//siempre que se va a utilizar codigo JS se tiene que encerrar entre llaves para poderse renderear
		//Los argumentos de una funcion map incluyen, el elemento, el index del elemento, el arreglo completo
		//por eso al poner ambas propiedades entonces si podemos acceder a ellas y asi usarlas a nuestro beneficio
		//para mandar parametros y modificar los valores de estado del comonente padre se accede al prop
		//con la funcion y se asigna como arrow function y se pasa el parametro
		return (
			<div> 
				<ul>
					{itemsSent.map((item,index) => 
						<li key={item.toString()} >{item} {index}
							<button onClick={ () => this.props.delFunction(index)}>Eliminar</button>
						</li>
					)}
				</ul>
			</div>
		);
	}

}
export default List;