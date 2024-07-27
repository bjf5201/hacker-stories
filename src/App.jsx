import { useState } from 'react';
import Nav from './components/Nav.jsx';
import Search from './components/Search.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const welcome = {
    title: 'Bethany Joy',
    message: 'Hi, so glad you stopped by!',
  };

  return (
    <>
      <Nav />
      <h1>{welcome.title}</h1>
      <p>{welcome.message}</p>
      <Search />
      <button type="button" onClick={handleClick}>
        Count
      </button>
    </>
  );
}

export default App;
