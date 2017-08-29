import React, { Component } from 'react';
import './components.css'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <span className="navbar-brand" >VScode Snippet Helper</span>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets">VScode Docs</a></li>
                            <li><a href="https://horizon0708.github.io/vscode-snippet-helper">Github</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;