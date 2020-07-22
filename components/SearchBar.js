import React from "react";
import { Searchbar } from "react-native-paper";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      style={{borderRadius: 50, height: 35}}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;
