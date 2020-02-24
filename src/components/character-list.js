import React from 'react'; 
import Characters from './characters'

class CharacterList extends React.Component { 
    constructor(props) {
        super(props);
         this.state = {
            characters:[
                {name: 'Annie'},
                {name: 'Machia'},
                {name: 'Marago'},
                {name: 'Mr Gray the cat'} 
            ],
            charName: ""
         }
    } 

    DeleteCharacter = (e) =>{  
        e.preventDefault();
        console.log("Removing character", "yeah im supposed to ain't i?")
    }

    AddCharacter = () =>{ 
        if(this.state.charName){ 
            var newChar = { name: this.state.charName}
            this.setState({ 
                characters: [...this.state.characters, newChar],
                charName: ""
            })
        }
        else{
            alert("Please add a character name.")
        }
    }

    downloadFile = async () => {
    const myCharacters = {lines: this.state.characters};
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
    }
 
    SetCharacterName = (e) => { 
        this.setState({
            charName: e.target.value
        })
    }

    render() {
        return (
            <div className="characters">
                <div className="character-add">
                    <input type="text" onChange={this.SetCharacterName} value={this.state.charName} placeholder="New character name..."/>
                    <button type="submit" className="btn btn-add" onClick={this.AddCharacter}> + </button> 
                </div>
                <div className="char-list">
                    {(this.state.characters.length> 0) ? this.state.characters.map((char, i) => <Characters key={i} name={char.name} index={i} DeleteCharacter={this.DeleteCharacter}  /> ) : <h1>Reeeeee!</h1>}
                </div>
                <div className="opts">
                    <button className="btn btn-add" onClick={this.AddLine}> Upload file </button>
                    <button className="btn btn-generate" onClick={this.downloadFile}> Create file </button> 
                </div>
            </div>
        );
    }
}

export default CharacterList;