import * as React from 'react';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  props.onSearch(event);

  return (
    <>
    <label htmlFor="search">Find something:</label>
    <input type="text" id="search" name="search" value={searchTerm} onChange={handleChange} />
    </>
  );
}

export default Search;