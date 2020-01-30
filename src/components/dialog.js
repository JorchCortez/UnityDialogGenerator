import React from 'react';
import Line from './line'
class Dialog extends React.Component {
 
    DeleteLine = () =>{ 
        console.log("Aaaaaaaand it's gone")
    }

    AddLine = () =>{ 
        console.log("Adding line", "yeah im supposed to ain't i?")
    }

    CreateFile = () =>{ 
        console.log( "Yoooup this is supposed to work at some point")
    }


  render() {
    return (
        <div className="conversation">
        <div className="dialogs">
            <Line DeleteLine={this.DeleteLine}/>
        </div>
        <div className="dialog-opts">
            <button className="btn btn-add" onClick={this.AddLine}> Add line </button>
            <button className="btn btn-generate" onClick={this.CreateFile}> Create file </button>
        </div>
        </div>
    );
  }
}

export default Dialog;
