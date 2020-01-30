import React from 'react';

class Dialog extends React.Component {
  render() {
    return (
    <div className="conversation">
        <div className="line">
            <label>Character</label>
            <input type="text" />
            <label>Dialog</label>
            <textarea rows="5" cols="50"></textarea>
        </div>
    </div>
    );
  }
}

export default Dialog;
