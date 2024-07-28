import * as React from 'react';
import NavList from './components/NavList.jsx';
import Search from './components/Search.jsx';
import BlogList from './components/Blog/BlogList.jsx';
import blogData from './data/blogData.js';
import navData from './data/navData.js';
import './App.css';

const App = () => {

  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  const welcome = {
    title: 'Bethany Joy',
    message: 'Hi, so glad you stopped by!',
  };

  return (
    <>
      <NavList list={navData}/>
      <h1>{welcome.title}</h1>
      <p>{welcome.message}</p>
      <Search onSearch={handleSearch}/>
      <BlogList data={blogData}/>
    </>
  );
}

export default App;
