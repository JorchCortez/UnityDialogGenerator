import React from 'react';

const opts = {
    options: [
      { name: 'Select…', value: null },
      { name: 'Annie', value: 'Annie'},
      { name: 'Machia', value: 'Machia'},
      { name: 'Mr. Gray', value: 'Mr. Gray'}
    ]
  }
  
const Line = (props) => {
 

    return (
    <div className="line">
        <div className="input-name"> 
            <select onChange={props.GetCharacter} value={props.character}> 
                {opts.options.map(item => ( <option key={item.value} value={item.value}> {item.name} </option> ))}
                <option value="Annie">Annie</option>
                <option value="Machia">Machia</option>
                <option value="Mr. Gray">Mr. Gray</option>
            </select> 
            <button className="btn btn-delete" onClick={() => {props.DeleteLine(props.id)}}> Delete line </button>
        </div>
        <textarea rows="5"></textarea>
        <div className="expressions">
            <input type="checkbox" name="expression" value="Default" checked /> Default 
            <input type="checkbox" name="expression" value="Angry" /> Angry 
            <input type="checkbox" name="expression" value="Happy" /> Happy 
            <input type="checkbox" name="expression" value="Angry" /> Worried 
            <input type="checkbox" name="expression" value="Amazed" /> Amazed 
            <input type="checkbox" name="expression" value="Scared" /> Scared 
            <input type="checkbox" name="expression" value="Laughing" /> Laughing 
        </div> 
    </div> 
    );
}

export default Line;
