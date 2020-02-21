import React from 'react'; 

class Characters extends React.Component { 
    constructor(props) {
        super(props);
         this.state = {}
    } 

    DeleteCharacter = (lineIndex) =>{  
        console.log("Removing character", "yeah im supposed to ain't i?")
    }

    AddCharacter = () =>{
        console.log("Adding character", "yeah im supposed to ain't i?")
    }

     downloadFile = async () => {
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
 
    GetCharacters = (e) => { 
        console.log("Gimme de chars m8")
    }

  render() {
    return ( 
            <div className="characters">
               <h1>Reeeeee!</h1>
            </div> 
    );
  }
}

export default Characters;
