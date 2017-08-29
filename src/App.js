import React, { Component } from 'react';
import './App.css';
import EditorPage from './pages/editorPage';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <Header />
        </div>
        <EditorPage />
      </div>
    );
  }
}

export default App;
