import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return(
      <div id="searchContainer">
          <h3>Book Search</h3>
          <form id="bookSearch">
              <label htmlFor="bookInput" form="bookSearch">Enter a book to search:</label>
              <br></br>
              <input type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="Book Title" required/>
              <br></br>
              <button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
          </form>
      </div>
  );
}

export default SearchForm;

