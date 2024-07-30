import * as React from 'react';
import NavList from './components/NavList.jsx';
import Search from './components/Search.jsx';
import BlogList from './components/Blog/BlogList.jsx';
import blogData from './data/blogData.js';
import navData from './data/navData.js';
import './App.css';

const App = () => {

  /* passed down to Search component */
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  /* filtered data for the BlogList component */
  const filteredBlog = blogData.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const welcome = {
    title: 'Bethany Joy',
    message: 'Hi, so glad you stopped by!',
  };

  return (
    <>
      <NavList data={navData}/>

      <h1>{welcome.title}</h1>
      <p>{welcome.message}</p>
      
      <Search search={searchTerm} onSearch={handleSearch}/>
      
      <BlogList data={filteredBlog}/>
    </>
  );
}

export default App;
