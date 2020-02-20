import React from 'react';

const charOpts = {
    options: [
      { name: 'Select…', value: null },
      { name: 'Annie', value: 'Annie'},
      { name: 'Machia', value: 'Machia'},
      { name: 'Mr. Gray', value: 'Mr. Gray'}
    ]
  }
const emotionOpts = {
    options: [
        { name: 'Default', value: 'Default'},
        { name: 'Angry', value: 'Angry'},
        { name: 'Happy', value: 'Happy'},
        { name: 'Worried', value: 'Worried'},
        { name: 'Amazed', value: 'Amazed'},
        { name: 'Scared', value: 'Scared'},
        { name: 'Laughing', value: 'Laughing'}
    ]
}
  
const Line = (props) => {
 

    return (
    <div className="line">
        <div className="dialog-opts">
        <h1 className="dialog-title">Dialog line #{props.id + 1}</h1><button className="btn btn-delete" onClick={() => {props.DeleteLine(props.id)}}> Delete line </button>
        </div>
        <div className="input-name"> 
            <select id={props.id} onChange={props.GetCharacter} value={props.character}> 
                {charOpts.options.map(item => ( <option key={item.value} value={item.value}> {item.name} </option> ))} 
            </select> 
            <select id={props.id} onChange={props.GetEmotion} value={props.emotion}> 
                {emotionOpts.options.map(item => ( <option key={item.value} value={item.value}> {item.name} </option> ))} 
            </select> 
        </div>
        <textarea id={props.id} onChange={props.GetDialogLine} rows="5"></textarea> 
    </div> 
    );
}

export default Line;
