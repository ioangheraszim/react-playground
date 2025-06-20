import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div>
        <input onChange={handleText} type="text" />
        <button onClick={handleVisible}>Visible</button>
        <p className={`${visible ? 'visible' : ''}`}>{text}</p>
      </div>
    </>
  );
}

export default App;
