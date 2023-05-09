import React from 'react';
import './App.css';
import AlbumFeature from './features/Album/pages';
import TodoFeature from './features/Todo/pages';
import logo from './logo.svg';
function App() {
  const name = 'tin'
  const age = 18;
  const isMale = true;
  const student = {
    name: 'nguyen van tin'
  };
  const colorList = ['red', 'green', 'blue']

  return (
    <div className="App">

      <TodoFeature />
      <AlbumFeature />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello world</p>
        <p>Xin chao {name} - {age} - {isMale ? 'Male' : 'Female'} </p>
        {isMale ? <p> Male </p> : <p> FeMale </p>}
        {isMale && <p> Male </p>}
        {!isMale && <p> FeMale </p>}

        {isMale && (
          <div>
            <p> Male </p>
            <p> Male </p>
            <p> Male </p>
          </div>
        )}


        {isMale && (
          <React.Fragment>
            <p> Male </p>
            <p> Male </p>
            <p> Male </p>
          </React.Fragment>
        )}
        {isMale && (
          <>
            <p> Male </p>
            <p> Male </p>
            <p> Male </p>
          </>
        )}

        <p>{student.name}</p>

        <ul>
          {colorList.map(color => (
            <li style={{ color }}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
