import { Divider, Input } from "antd";

function Search({ onSearch }) {
  const handleSearch = (event) => {
    const newSearchTerm = event.target.value;
    onSearch(newSearchTerm);
  };

  return (
    <div>
      <label>Search</label>
      <Input
        name="search"
        type="text"
        onChange={handleSearch}
        placeholder="Search food..."
        style={{width:"200px"}}
      />
    </div>
  );
}

export default Search;
