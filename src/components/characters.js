import React from 'react'; 

class Characters extends React.Component { 
    constructor(props) {
        super(props); 
      } 
      render () { 
        return(
          <li className="list-group-item "> 
              <span className="char-name">{this.props.name}</span>
              <button type="button" className="btn btn-delete" onClick={this.props.DeleteCharacter} id={this.props.index}>&times;</button>
          </li>     
        );
      }
}

export default Characters;
