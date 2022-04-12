import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  return (
    <>
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" name="name" id="name" />
        </div>
      </form>
    </>
  );
}

export default SearchForm
