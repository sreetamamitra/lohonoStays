import React, { useState } from "react";
import ArticleList from "./components/ArticleList";
import SearchBar from "./components/SearchBar";
import getNewsArticle from "./api/ImageActions";
import '../src/index'

function App() {

  const [state, setState] = useState({
    results: [],
    page:0,
    searchText:''
  });

  const onSearch = (text) =>
   {
    const arrayOfValues = getNewsArticle(0, text);
    setState(prevState => {
      return { ...prevState, results: arrayOfValues, searchText: text }
    })
  };

  const handlePrev = (e) => {
    var newPage = state.page - 1
    if (newPage <= 0){
      newPage = 0;
    }
    var newResults = getNewsArticle(newPage, state.searchText);
    setState(prevState => {
      return { ...prevState, page: newPage, results: newResults }
    })
  }

  const handleNext = (e) => {
    var newPage = state.page + 1
    var newResults = getNewsArticle(newPage, state.searchText);
    setState(prevState => {
      return { ...prevState, page: newPage, results: newResults }
    })
  }

  return (
    <div className="app">
         <div className="headerbar"> 
         <h3>News Articles</h3>   
        <SearchBar onSearch={onSearch} className="search-bar"/>
        <div className="nav-btn">
        <button  onClick={handlePrev}>prev</button>
        <button  onClick={handleNext}>next</button>
        </div>
        </div> 
        <ArticleList results={state.results}/>
      </div>
  );
}

export default App;
