import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div>
        <input onChange={handleText} type="text" />
        <p>{text}</p>
      </div>
    </>
  );
}

export default App;
