import React from 'react';
import './App.css';
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <Button label="Primary Button" />
      <Button
        label="Outline Button"
        style={{ background: 'transparent', border: '3px solid #fecd43' }}
      />
      <Button
        label="Rounded Button"
        style={{ borderRadius: '15px'}}
      />
      <Button
        label="Disabled Button"
        style={{ background: 'gray' , border: 'gray', cursor: 'not-allowed' }}
      />
    </div>
  );
}

export default App;
