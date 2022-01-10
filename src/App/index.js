import React, { useState } from 'react';
import './App.scss';

function App() {
  const [domWriting, setDomWriting] = useState('Nothing Here!');

  const handleClick = (e) => {
    console.warn(`You clicked ${e.target.id}`);
    setDomWriting(`You clicked ${e.target.id}! Check the Console!`);
  };

  return (
    <div className='App'>
      
    </div>
  );
}

export default App;
