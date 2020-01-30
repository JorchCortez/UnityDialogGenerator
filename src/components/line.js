import React from 'react';
 
const Line = (props) => {
    return (
    <div className="line">
        <div className="input-name"> 
            <select>
                <option value="0">Character Name</option>
                <option value="saab">Annie</option>
                <option value="mercedes">Machia</option>
                <option value="audi">Mr. Gray</option>
            </select> 
            <button className="btn btn-delete" onClick={props.DeleteLine}> Delete line </button>
        </div>
        <textarea rows="5"></textarea>
        <div className="expressions">
            <input type="checkbox" name="expression" value="Default" checked /> Default 
            <input type="checkbox" name="expression" value="Angry" /> Angry 
            <input type="checkbox" name="expression" value="Happy" /> Happy 
            <input type="checkbox" name="expression" value="Angry" /> Angry 
            <input type="checkbox" name="expression" value="Amazed" /> Amazed 
            <input type="checkbox" name="expression" value="Scared" /> Scared 
            <input type="checkbox" name="expression" value="Laughing" /> Laughing 
        </div> 
    </div> 
    );
}

export default Line;
