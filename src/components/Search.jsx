const Search = ({ search, onSearch }) => {

  return (
    <>
    <label htmlFor="search">Find something:</label>
    <input type="text" id="search" name="search" value={search} onChange={onSearch} />
    </>
  );
}

export default Search;