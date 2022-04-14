import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { searchItems } = useGlobalContext();

  return (
    <>
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            value={searchItems}
          />
        </div>
      </form>
    </>
  );
};

export default SearchForm;
