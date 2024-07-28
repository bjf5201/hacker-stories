const Search = (props) => {

  return (
    <>
    <label htmlFor="search">Find something:</label>
    <input type="text" id="search" name="search" value={props.value} onChange={props.onSearch} />
    </>
  );
}

export default Search;