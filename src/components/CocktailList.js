import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  return (
    <>
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        <Cocktail />
      </div>
    </>
  );
};

export default CocktailList;
