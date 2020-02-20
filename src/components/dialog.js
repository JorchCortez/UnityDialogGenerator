import React from 'react';
import Line from './line'

var file;

class Dialog extends React.Component { 
    constructor(props) {
        super(props);
         this.state = {
                 lines: [{
                     character: "",
                     dialog:"",
                     emotion:"Default"
                 }]
             }
    } 

    DeleteLine = (lineIndex) =>{ 
        const dialog = [...this.state.lines]; 
        console.table("******before******");
        console.table(dialog);
        console.log(lineIndex);
        dialog.splice(lineIndex, 1);
        console.table("******after******");
        console.table(dialog);
        console.log(lineIndex);
        this.setState({lines: dialog})
    } 

    AddLine = () =>{
        var newLine = { character: "",dialog:"",emotion:"Default"}
            this.setState({ 
                lines: [...this.state.lines, newLine]
            }) 
        console.log("Adding line", "yeah im supposed to ain't i?")
    }

     downloadFile = async () => {
        const myDialog = {lines: this.state.lines};
        const fileName = "file"; 
        const json = JSON.stringify(myDialog);
        const blob = new Blob([json],{type:'application/json'});
        const href = await URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

    GetCharacter = (e) => { 
        const dialog = [...this.state.lines]; 
        this.state.lines[e.target.id].character = e.target.value;
        this.setState({
            lines:[...dialog]
        })
    }

    GetEmotion = (e) => { 
        console.log(e.target.value)
        console.log(e.target.id)
        const dialog = [...this.state.lines]; 
        this.state.lines[e.target.id].emotion = e.target.value;
        this.setState({
            lines:[...dialog]
        }) 
    }

    GetDialogLine = (e) => { 
        const dialog = [...this.state.lines];
        this.state.lines[e.target.id].dialog = e.target.value;
        this.setState({
            lines:[...dialog]
        }) 
    }


  render() {
    return (
        <div className="conversation">
        <div className="dialogs">
            {this.state.lines.map((data, i) => <Line key={i} id={i} GetCharacter={this.GetCharacter} GetEmotion={this.GetEmotion} GetDialogLine={this.GetDialogLine} DeleteLine={this.DeleteLine} character={data.character} emotion={data.emotion} dialog={data.dialog} emotion={data.emotion}/> ) }
        </div>
        <div className="dialog-opts">
            <button className="btn btn-add" onClick={this.AddLine}> Add line </button>
            <button className="btn btn-generate" onClick={this.downloadFile}> Create file </button> 
        </div>
        </div>
    );
  }
}

export default Dialog;
