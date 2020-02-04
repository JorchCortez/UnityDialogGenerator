import React from 'react';
import Line from './line'
class Dialog extends React.Component { 
    constructor(props) {
        super(props);
         this.state = {
                 lines: [{
                     character: "",
                     dialog:"",
                     emotion:""
                 }]
             }
     } 

    DeleteLine = (lineIndex) =>{ 
        const dialog = [...this.state.lines]; 
        console.table(dialog);
        dialog.splice(lineIndex, 1);
        console.table(dialog);
        console.log(lineIndex);
        this.setState({lines: dialog})
    }

    AddLine = () =>{  

        var newLine = { character: "",dialog:"",emotion:""}

        this.setState({ lines: [newLine, ...this.state.lines]
    }) 
        console.log("Adding line", "yeah im supposed to ain't i?")
    }

    CreateFile = () =>{ 
        console.log( "Yoooup this is supposed to work at some point")
    }

    GetCharacter = (e) => {
        console.log(e.target.value)
    }
    GetText = (e) => {
        this.setState({itemDescription: e.target.value});
    }
    GetEmotion = (e) => {
        this.setState({itemPrice: parseInt(e.target.value)});
    }


  render() {
    return (
        <div className="conversation">
        <div className="dialogs">
            {this.state.lines.map((data, i) => <Line key={i} id={i} GetCharacter={this.GetCharacter} DeleteLine={this.DeleteLine} character={data.character} dialog={data.dialog} emotion={data.emotion}/> ) }
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
