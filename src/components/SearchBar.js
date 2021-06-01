import React,{ useState }from "react";

function Searchbar(props) {

  const { 
    onSearch
  } = props;

  const [searchText, setSearchText] = useState('');

  const handleInput = (e) => {
    const text = e.target.value
    setSearchText(text)
  }

  const handleEnterKeyPressed = (e) => {
    if(e.key=== 'Enter') {
      onSearch(searchText)
    }
  }

  return (
    <>
        <input
          className="input"
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          type="text"
          value={searchText}
          placeholder="Search Articles Press-Enter"
        />
    </>
  );
}

export default Searchbar;
