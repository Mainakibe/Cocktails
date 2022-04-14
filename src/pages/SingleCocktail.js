import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';

const SingleCocktail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState(null);

  const getData = async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.drinks) {
        const {
         
          strDrink: name,
          strDrinkThumb: image,
          strCategory: category,
          strAlcoholic: info,
          strGlass: glass,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
        
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setCocktails(newCocktail);
      } else {
        setCocktails(null)
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  const { name, image, category, info, glass, instructions, ingredients } =
    cocktails;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
          <p>
            <span className="dink-data">ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? (
                <span className="drink-data" key={index}>
                  {item}
                </span>
              ) : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
