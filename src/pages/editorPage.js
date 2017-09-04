
import React, { Component } from 'react';
import CodeEditor from '../components/codeEditor';
import SnippetEditor from '../components/snippetEditor';
import { parseToSnippet, addDefault } from '../utility/snippetHelper';
import TagEditor from '../components/tagEditor';

class EditorPage extends Component {
    constructor() {
        super();
        this.state = {
            text: '// paste your code here!',
            title: '',
            prefix: '',
            description: ''
        }

    }

    handleChange = (e) =>{
        this.setState({ text : e });
    }

    handleTitleChange = (e) => this.setState({ title : e.target.value });
    handlePrefixChange = (e) => this.setState({ prefix: e.target.value});
    handleDescriptionChange = (e) => this.setState({ description: e.target.value});

    handleClear = (state) => {
        this.setState({state: ""});
    }

    render() {
        const codeProps = {
            handler: (e)=>this.handleChange(e),
            text: this.state.text
        }

        const snippetProps = {
            handler: (e)=>this.handleChange(e),
            text: addDefault(parseToSnippet(this.state.text), {
                title: this.state.title,
                prefix: this.state.prefix,
                description: this.state.description
            }),
        }

        const tagProps ={
            titleHandler: this.handleTitleChange,
            prefixHandler: this.handlePrefixChange,
            descriptionHandler: this.handleDescriptionChange,
            clearHandler: this.handleClear,
            title: this.state.title,
            prefix: this.state.prefix,
            description: this.state.description
        }

        return (
            <div className="row padding-0" style={{ position: 'relative' }}>
                <div className="col-xs-3 padding-0">
                    <TagEditor {...tagProps} />
                    
                </div>
                    <div className="col-xs-9 padding-0">
                    <CodeEditor {...codeProps} />
                    <div className="col-xs-12 col-sm-5 padding-0">
                        <SnippetEditor {...snippetProps} />
                    </div>
                </div>

                
            </div>
        );
    }
}
export default EditorPage;