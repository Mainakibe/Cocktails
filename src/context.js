import React, { useState, useContext, useEffect, createContext } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [searchItems, setSearchItems] = useState('b');
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchItems}`);
      const data = await res.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchItems]);

  useEffect(() => {
    getDrinks();
  }, [searchItems, getDrinks]);
  return (
    <AppContext.Provider value={{ setSearchItems, loading, cocktails }}>
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
