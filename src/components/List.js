import React from 'react';

class List extends React.Component{

	state = {
		name: "holis",
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
		return (
			<div> 
				<ul>
					{itemsSent.map((item,index) => 
						<li key={item.toString()} >{item} {index}<button onClick={ () => this.props.delFunction(index)}> Eliminar</button></li>
					)}
				</ul>
			</div>
		);
	}

}
export default List;