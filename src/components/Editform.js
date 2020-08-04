import React from 'react';

class Editform extends React.Component{

	state = {
		title:"",
		description:"",
		index:""
	}


	render(){
		return(
				<div> 
					<input type="text" onChange={this.props.changeTitle} value={this.props.title}/>
					<input type="text" onChange={this.props.changeDescription} value={this.props.description}/>
					<button onClick={() => this.props.editFunction(this.props.index,this.props.title,this.props.description)}>Enviar</button>
				</div>
			);
		
	}


}

export default Editform;