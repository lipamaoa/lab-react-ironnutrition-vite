import { Divider, Input } from "antd";

function Search({ onSearch }) {
  const handleSearch = (event) => {
    const newSearchTerm = event.target.value;
    onSearch(newSearchTerm);
  };

  return (
    <div>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input
        name="search"
        type="text"
        onChange={handleSearch}
        placeholder="Search food..."
      />
    </div>
  );
}

export default Search;
