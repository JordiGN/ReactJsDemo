import React from 'react';

class List extends React.Component{

	render(){
		const {itemsSent, setEdit, doneFunction, delFunction} = this.props;

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
							<button onClick={ () => setEdit(item.title,item.description,index)} >Editar</button>
							<button onClick={ () => doneFunction(index)}> Mark Done </button>
							<button onClick={ () => delFunction(index)}>Eliminar</button>
						</li>
					)}
				</ul>
			</div>
		);
	}
}
export default List;