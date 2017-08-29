var x = `
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EditorPage from './pages/editorPage';

class App extends Component {
    render() {
    return (
      <div className="App">
        <EditorPage />
      </div>
    );
  }
}

export default App;
`;
x = x.split('\n')
.map(x=> x.replace(/"/g, '\''))
.map(x=> x.replace(/\s{4}/g, '\\t'))
.map(x=> `"${x}"`)
.join('\n');


console.log(x);