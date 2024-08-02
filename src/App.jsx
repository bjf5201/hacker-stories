import * as React from 'react';
import NavList from './components/NavList.jsx';
import Search from './components/Search.jsx';
import BlogList from './components/Blog/BlogList.jsx';
import blogData from './data/blogData.js';
import './App.css';

const App = () => {

  
  const useStorageState = (key, initialState) => {
    const [value, setValue] = React.useState(localStorage.getItem(key) || initialState);
    React.useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
  };

  /* passed down to Search component */
  const [searchTerm, setSearchTerm] = useStorageState('search', '');
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  /* filtered data for the BlogList component */
  const filteredBlog = blogData.filter((blog) => {
    return blog.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const welcome = {
    title: 'Bethany Joy',
    message: 'Hi, so glad you stopped by!',
  };

  return (
    <>
      <NavList />

      <h1>{welcome.title}</h1>
      <p>{welcome.message}</p>
      
      <Search search={searchTerm} onSearch={handleSearch}/>
      
      <BlogList data={filteredBlog}/>
    </>
  );
}

export default App;
