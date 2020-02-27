import React from 'react';
import {Draggable} from 'react-beautiful-dnd'
const emotionOpts = {
    options: [
        { name: 'Default', value: 'Default'},
        { name: 'Angry', value: 'Angry'},
        { name: 'Happy', value: 'Happy'},
        { name: 'Worried', value: 'Worried'},
        { name: 'Amazed', value: 'Amazed'},
        { name: 'Scared', value: 'Scared'},
        { name: 'Laughing', value: 'Laughing'},
        { name: 'Sad', value: 'Sad'}, 
        { name: 'Thoughtful', value: 'Thoughtful'}, 
        { name: 'Determined', value: 'Determined'},
        { name: 'Confused', value: 'Confused'}
    ]
}
  
class Line extends React.Component { 
        constructor(props) {
            super(props);
             this.state = {
                characters:[]
            }
        } 
 
    componentDidMount(){
        this.setState({
            characters: (JSON.parse(localStorage.getItem("myCharacters")) ) ? JSON.parse(localStorage.getItem("myCharacters")) : []
        })
    }

    render(){ 
        return (
            <Draggable draggableId={this.props.id.toString() } index={this.props.index}>
                {provided=>(
                    <div className="line" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <div className="opts dialog-opts">
                            <h1 className="dialog-title">Dialog line #{this.props.id + 1}</h1><button className="btn btn-delete" onClick={() => {this.props.DeleteLine(this.props.id)}}> Delete line </button>
                        </div>
                        <div className="input-name"> 
                            <select id={this.props.id} onChange={this.props.GetCharacter} value={this.props.character}> 
                                <option value=""> {(this.state.characters.length > 0) ? "Select a character" : "Please add characters" } </option>
                                {this.state.characters.map((c, i) => ( <option key={i} value={c.name}> {c.name} </option> ))} 
                            </select> 
                            <select id={this.props.id} onChange={this.props.GetEmotion} value={this.props.emotion}> 
                                {emotionOpts.options.map(item => ( <option key={item.value} value={item.value}> {item.name} </option> ))} 
                            </select> 
                        </div>
                        <textarea id={this.props.id} onChange={this.props.GetDialogLine} value={this.props.dialog} rows="5"></textarea> 
                    </div>  
                )} 
            </Draggable>
        );
    }
}

export default Line;
