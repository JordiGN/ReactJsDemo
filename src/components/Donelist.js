import React from 'react';

class Donelist extends React.Component{

	render(){
		const {doneItems} = this.props;

		return(
			<ul>
					{doneItems.map((item,index) => 
						<li key={item.title.toString()} >{item.title} {item.description}
							<button onClick={ () => this.props.delDoneFunction(index)}>Eliminar</button>
						</li>
					)}
			</ul>

		)
	}

}

export default Donelist;