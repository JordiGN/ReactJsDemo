import React from 'react';

class List extends React.Component{

	state = {
		name: "holis",
		//list: [],
	}

	render(){

		return (
			<div> 
				<ul>
					{this.props.itemsSent.map((item) => 
											<li key={item.toString()} >{item}</li>
											)}
				</ul>
			</div>

		);
	


	}

}
export default List;