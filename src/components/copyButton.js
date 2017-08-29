import React from 'react';
import './copyButton.css';

const CopyButton = (target) => {
    const handleCopy = (e, target)=> {
        var range = document.createRange();
        range.selectNode(document.getElementById(target));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("Copy");
    }

    return <button className='btn btn-default btn-circle btn-lg transparent'
    onClick={e=>handleCopy(e, target)}
    style={{position: "absolute",
            right: '20px',
            top: '80px'}}>
        <i className="fa fa-clipboard" aria-hidden="true"></i>
    </button> 
}

export default CopyButton;