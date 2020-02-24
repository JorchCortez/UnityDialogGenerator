import React from 'react';
import Line from './line'

class Dialog extends React.Component { 
    constructor(props) {
        super(props);
         this.state = {
                 lines: [{
                     character: "",
                     dialog:"",
                     emotion:"Default"
                 }],
                 dialogTitle: ""
        }
    } 

    DeleteLine = (lineIndex) =>{ 
        const dialog = [...this.state.lines];
        dialog.splice(lineIndex, 1);
        this.setState({lines: dialog})
    }

    AddLine = () =>{
        var newLine = { character: "",dialog:"",emotion:"Default"}
            this.setState({ 
                lines: [...this.state.lines, newLine]
            })
    }

    downloadFile = async () => {
        if(!this.state.dialogTitle){
            alert("Please add a title for the dialog.");
            return;
        }
 
        if(this.state.lines.find(l => (!l.character || !l.dialog ))){
            alert("All the dialogs require a Character and Text.");
            return;
        }

        if(this.state.lines.length > 0){
            const myDialog = {lines: this.state.lines};
            const fileName = this.state.dialogTitle; 
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
        else{
            alert("The file is empty")
        }
    }

    GetCharacter = (e) => { 
        const dialog = [...this.state.lines];  
        dialog[e.target.id].character = e.target.value; 
        this.setState({
            lines:[...dialog]
        })
    }

    GetEmotion = (e) => {
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

    UpdateTitle = (e) =>{
        this.setState({
            dialogTitle: e.target.value
        });
    }

  render() {
    return ( 
        <div className="conversation">
            <div className="conversation-title"> 
                <input type="text" onChange={this.UpdateTitle} placeholder="Dialog Title"></input>
            </div>
            <div className="dialogs"> 
                {this.state.lines.map((data, i) => <Line key={i} id={i} GetCharacter={this.GetCharacter} GetEmotion={this.GetEmotion} GetDialogLine={this.GetDialogLine} DeleteLine={this.DeleteLine} character={data.character} emotion={data.emotion} dialog={data.dialog} emotion={data.emotion}/> ) }
            </div>
            <div className="opts">
                <button className="btn btn-add" onClick={this.AddLine}> Add line </button>
                <button className="btn btn-generate" onClick={this.downloadFile}> Create file </button> 
            </div>
        </div> 
    );
  }
}

export default Dialog;
