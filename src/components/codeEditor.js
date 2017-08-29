import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';


class CodeEditor extends Component {
    render(){
        const { text, handler} = this.props;
        
        return(
            <AceEditor
            mode="javascript"
            theme="monokai"
            onChange={handler}
            value={text}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            width=""
            showPrintMargin={false}
            className="col-xs-12 col-sm-7"
            height="600px"
        />
        );
    }
}
export default CodeEditor;