import React from 'react'; 
import Characters from './characters'
import Files from "react-files";

class CharacterList extends React.Component { 
    constructor(props) {
        super(props);
         this.state = {
            characters:[],
            charName: ""
         }

         this.fileReader = new FileReader();
         this.fileReader.onload = event => {
           this.setState({ characters: JSON.parse(event.target.result).characters}, () => { 
             console.log(this.state.characters);
             this.SaveData("");
           });
         };
    } 

    componentDidMount(){
        this.setState({
            characters: (JSON.parse(localStorage.getItem("myCharacters")) ) ? JSON.parse(localStorage.getItem("myCharacters")) : []
        })
    }

    SaveData = (newChar) =>{
        localStorage.setItem('myCharacters', (newChar) ? JSON.stringify([...this.state.characters, newChar]) : JSON.stringify(this.state.characters));
    }

    DeleteCharacter = (e, lineIndex) =>{ 
        e.preventDefault();
        console.log("run?")
        const characterList = [...this.state.characters];
        characterList.splice(lineIndex, 1);
        this.setState({characters: characterList})  
        localStorage.setItem('myCharacters',  JSON.stringify(characterList));
    }

    AddCharacter = () =>{ 
        if(this.state.charName){ 
            var newChar = { name: this.state.charName}
            this.setState({ 
                characters: [...this.state.characters, newChar],
                charName: ""
            })
            this.SaveData(newChar)
        }
        else{
            alert("Please add a character name.")
        } 
    }

    downloadFile = async () => {
    if(this.state.characters.length > 0){
            const myCharacters = {characters: this.state.characters};
            const fileName = "Characters"; 
            const json = JSON.stringify(myCharacters);
            const blob = new Blob([json],{type:'application/json'});
            const href = await URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = href;
            link.download = fileName + ".json";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }else{
            alert("Please add characters to the list")
        }
    }

    SetCharacterName = (e) => { 
        if (e.key === 'Enter') {
            this.AddCharacter();
        }
        this.setState({
            charName: e.target.value
        })
    }

    keyPressed = (event) => {
        if (event.key === "Enter") {
            this.AddCharacter()
        }
    }

    render() {
        return (
            <div className="main">
                <div className="character-add">
                    <input type="text" maxLength="40" onChange={this.SetCharacterName} value={this.state.charName} onKeyPress={this.keyPressed} placeholder="New character name..."/>
                    <button type="submit" className="btn btn-add" onClick={this.AddCharacter}> + </button> 
                </div>
                <div className="char-list">
                    {(this.state.characters.length> 0) ? this.state.characters.map((char, i) => <Characters key={i} name={char.name} index={i} DeleteCharacter={this.DeleteCharacter}  /> ) : <h1 className="white">Please add your characters or upload your character's file.</h1>}
                </div>
                <div className="opts"> 
                    <Files className="btn btn-upload"
                        onChange={file => {
                            this.fileReader.readAsText(file[file.length - 1]);
                        }}
                        onError={err => console.log("Error:", err)}
                        accepts={[".json"]}
                        multiple 
                        maxFileSize={10000000}
                        minFileSize={0}
                        clickable >Upload file</Files>
                    <button className="btn btn-generate" onClick={this.downloadFile}> Create file </button> 
                </div>
            </div>
        );
    }
}

export default CharacterList;