import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/twilight';

class SnippetEditor extends Component {
    render(){
        const { text } = this.props;

        return(
            <AceEditor
            mode="json"
            readOnly={true}
            theme="twilight"
            value={text}
            name="snippet-output"
            editorProps={{ $blockScrolling: true }}
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={false}
            width=""
            className="col-xs-12"
            height="600px"
        />
        );
    }
}
export default SnippetEditor;