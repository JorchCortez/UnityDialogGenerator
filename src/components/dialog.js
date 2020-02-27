import React from 'react';
import Line from './line'
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import Files from "react-files";

class Dialog extends React.Component { 
    constructor(props) {
        super(props);
         this.state = {
                 lines: [{
                     character: "",
                     dialog:"",
                     emotion:"Default"
                 }],
                 dialogTitle: "",
                 fileName:""
        }
        this.fileReader = new FileReader();
        this.fileReader.onload = event => {
            var res = JSON.parse(event.target.result)
            console.log(res)
            if(res.lines){ 
                this.setState({ lines: res.lines,dialogTitle: this.state.fileName.replace('.json','')});
                
            }
            else{ 
                this.setState({ dialogTitle: ""});
                alert("Please add a valid dialog file")
            }
        };
        
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

    onDragEnd = result => {
        let to = result.destination.index;
        let from = result.source.index; 
        this.state.lines.splice(to, 0, this.state.lines.splice(from, 1)[0]); 
    } 

  render() {
    return ( 
        <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="conversation">
                <div className="conversation-title"> 
                    <input type="text" onChange={this.UpdateTitle} value={this.state.dialogTitle} placeholder="Dialog Title"></input>
                </div> 
                <Droppable droppableId="0">  
                {provided => (
                    <div className="dialogs" 
                    ref={provided.innerRef}
                    {...provided.droppableProps}> 
                        {this.state.lines.map((data, i) => <Line index={i} key={i} id={i} GetCharacter={this.GetCharacter} GetEmotion={this.GetEmotion} GetDialogLine={this.GetDialogLine} DeleteLine={this.DeleteLine} character={data.character} emotion={data.emotion} dialog={data.dialog} emotion={data.emotion}/> ) }
                        {provided.placeholder}
                    </div> 
                )}
                </Droppable>
                <div className="opts">
                    <Files className="btn btn-upload" 
                        onChange={file => {
                            console.log(file.length)
                            this.fileReader.readAsText(file[file.length - 1]); 
                            this.setState({Name: file[file.length - 1].name});
                            console.log(file)
                        }}
                        onError={err => console.log("Error:", err)}
                        accepts={[".json"]}
                        multiple 
                        maxFileSize={10000000}
                        minFileSize={0}
                        clickable >Upload file</Files>
                    <button className="btn btn-add" onClick={this.AddLine}> Add line </button>
                    <button className="btn btn-generate" onClick={this.downloadFile}> Create file </button> 
                </div>
            </div> 
        </DragDropContext>
    );
  }
}

export default Dialog;
