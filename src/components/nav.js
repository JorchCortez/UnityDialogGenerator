import React from 'react'; 

class Nav extends React.Component { 
    constructor(props) {
        super(props);
         this.state = {}
    } 

  render() {
    return ( 
        <div className="nav-bar">
            <li><a href="#home">New Conversation</a></li>
            <li><a href="#news">Manage Characters</a></li>
            <li><a href="#contact">Manage moods</a></li> 
        </div>
    );
  }
}

export default Nav;
