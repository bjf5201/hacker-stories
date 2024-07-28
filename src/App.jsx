import * as React from 'react';
import NavList from './components/NavList.jsx';
import Search from './components/Search.jsx';
import BlogList from './components/Blog/BlogList.jsx';
import blogData from './data/blogData.js';
import './App.css';

const App = () => {
  const navList = [
    {
      title: 'Home',
      url: '/',
      objectID: 0,
    },
    {
      title: 'About',
      url: '/about',
      objectID: 1,
    },
    {
      title: 'Contact',
      url: '/contact',
      objectID: 2,
    },
    {
      title: 'Services',
      url: '/services',
      objectID: 3,
    },
  ];

  const [count, setCount] = React.useState(0);

  const handleChange = (event) => {
    setCount(event.target.value);
    count + 1;
  }

  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  const welcome = {
    title: 'Bethany Joy',
    message: 'Hi, so glad you stopped by!',
  };

  return (
    <>
      <NavList list={navList}/>
      <h1>{welcome.title}</h1>
      <p>{welcome.message}</p>
      <Search onSearch={handleSearch}/>
      <BlogList data={blogData}/>
      <button onClick={handleChange}>Click me!</button>
    </>
  );
}

export default App;
