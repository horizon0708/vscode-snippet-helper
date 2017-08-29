import React, { Component } from 'react';
import './components.css';

class OptionPanel extends Component {
constructor(){
    super();
    this.handleCopy = this.handleCopy.bind(this);
}
    handleCopy(){
        var range = document.createRange();
        range.selectNode(document.getElementById("test"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("Copy");
    }
    

    render(){
        return(
            <div id="option-panel" className="col-xs-12">
                <a onClick={this.handleCopy}>[ Copy ]</a><a >[ Clear ]</a>
            </div>
        );
    }
}

export default OptionPanel;
