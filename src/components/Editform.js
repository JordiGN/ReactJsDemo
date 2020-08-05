import React from 'react';

class Editform extends React.Component{

	render(){
		//if (this.props.editMode) {
		const {index, title, description, changeTitle,changeDescription, editFunction, quitEditMode} = this.props;
		//investigar mas de operadores logicos
			return this.props.editMode && (
				<div> 
					<input type="text" onChange={changeTitle} value={this.props.title}/>
					<input type="text" onChange={changeDescription} value={this.props.description}/>
					<button onClick={() => this.props.editFunction(index,title,description)}>Enviar</button>
					<button onClick={quitEditMode}>Done</button>
				</div>
			);	
		// }else{
		// 	return(<div></div>);
		// }
	
	}

}

export default Editform;