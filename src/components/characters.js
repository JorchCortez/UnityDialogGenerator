import React from 'react'; 

class Characters extends React.Component {  
      //I havent broke this right?
      render () { 
        return(
          <li className="list-group-item "> 
              <span className="char-name">{this.props.name}</span>
              <button type="button" className="btn btn-delete" onClick={ e => this.props.DeleteCharacter(e, this.props.index)} id={this.props.index}>&times;</button>
          </li>     
        );
      }
}

export default Characters;
