import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    setNumber((number) => number + 1);
  };

  const decreaseNumber = () => {
    setNumber((number) => number - 1);
  };

  return (
    <>
      <div>
        <button onClick={increaseNumber}>Next</button>
        <p>{number}</p>
        <button disabled={number === 0} onClick={decreaseNumber}>
          Prev
        </button>
      </div>
    </>
  );
}

export default App;
