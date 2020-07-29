import React from 'react';

class List extends React.Component{

	render(){
		const {itemsSent} = this.props;
		//siempre que se va a utilizar codigo JS se tiene que encerrar entre llaves para poderse renderear
		return (
			<div> 
				<ul>
					{itemsSent.map((item) => 
						<li key={item.toString()} >{item}</li>
					)}
				</ul>
			</div>
		);
	}

}
export default List;