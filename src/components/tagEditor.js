import React, { Component } from 'react';
import './components.css';

class TagEditor extends Component {
    render() {
        const {  titleHandler, prefixHandler, descriptionHandler, title, prefix, description } = this.props;
        return (
            <div className="col-xs-12 tag-editor">
                <div className="col-xs-12 col-sm-4">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <form className="tag-editor-form">
                                <div className="form-inline input-group-sm">
                                    <label className="tag-label" htmlFor="snippet-title">Title:</label>
                                    <input id="snippet-title" className="form-control" onChange={titleHandler} value={title} />
                                </div>
                                <div className="form-inline input-group-sm">
                                    <label className="tag-label" htmlFor="snippet-prefix">Prefix:</label>
                                    <input id="snippet-prefix" className="form-control"  onChange={prefixHandler} value={prefix} />
                                </div>
                                <div className="form-inline input-group-sm">
                                    <label className="tag-label" htmlFor="snippet-description">Description:</label>
                                    <input id="snippet-description" className="form-control"  onChange={descriptionHandler} value={description} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-8">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="col-xs-6">
                            <p className="syntax">
                                final cursor position <code>$0</code><br />
                                placeholder <code>${"{1:foo}"}</code><br />
                                choices <code>${"{1|one,two,three|}"}</code><br />
                                variables <code>${"{name:default}"}</code><br />
                            </p>
                            </div>
                            <div className="col-xs-6">
                            <p className="variables">
                                variables: <code>TM_SELECTED_TEXT</code> <code>TM_CURRENT_LINE</code> <code>TM_CURRENT_WORD</code> <code>TM_LINE_INDEX</code> <code>TM_LINE_NUMBER</code> <code>TM_FILENAME</code> <code>TM_DIRECTORY</code> <code>TM_FILEPATH</code> 
                            </p>
                            </div>
                            
                        </div>
                    </div>
                </div>


            </div>

        );
    }
}
export default TagEditor;