import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const setTags = (tags) => {
  let arrayTags = [];
  if (tags) {
    if (tags.includes(',')) {
      arrayTags = tags.replace(/\s/g, '').split(',');
    } else {
      arrayTags.push(tags);
    }
  }
  return arrayTags;
};

export default function HeaderDetails() {
  const [favorite, setFavorite] = React.useState(false);
  const [clipboard, setClipboard] = React.useState(false);
  const { detail } = useSelector((state) => state);
  const key = Object.keys(detail)[0];
  const recipe = detail[key][0];
  const path = window.location.pathname.split('/')[1];
  let ref = null;
  let localStorageObj = null;
  let actualRecipeObj = null;
  const { pathname } = window.location;
  if (path === 'comidas') {
    ref = { strTitle: 'strMeal', strThumb: 'strMealThumb', strCateg: 'strCategory' };

    localStorageObj = { id: recipe.idMeal,
      type: 'comida',
      area: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb };
    actualRecipeObj = { ...localStorageObj, tags: setTags(recipe.strTags) };
  }
  if (path === 'bebidas') {
    ref = { strTitle: 'strDrink', strThumb: 'strDrinkThumb', strCateg: 'strAlcoholic' };
    localStorageObj = { id: recipe.idDrink,
      type: 'bebida',
      area: '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb };

    actualRecipeObj = { ...localStorageObj, tags: setTags(recipe.strTags) };
  }
  useEffect(() => {
    const isFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'))
      .some((item) => item.id === recipe.idMeal || item.id === recipe.idDrink);
    setFavorite(isFavorite);
    localStorage.setItem('actualRecipe', JSON.stringify(actualRecipeObj));
  }, [recipe, actualRecipeObj]);
  const handleClickFavorite = () => {
    setFavorite(!favorite);
    if (!favorite) {
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const allFavorites = [...favoriteRecipes, localStorageObj];
      localStorage.setItem('favoriteRecipes', JSON.stringify(allFavorites));
    } else {
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const allFavorites = favoriteRecipes.filter(
        (item) => item.id !== localStorageObj.id,
      );
      localStorage.setItem('favoriteRecipes', JSON.stringify(allFavorites));
    }
  };
  return (
    <section>
      <div>
        <img
          src={ recipe[ref.strThumb] }
          alt="test"
          data-testid="recipe-photo"
          className="w-50"
        />
      </div>
      <div className="d-flex">
        <div>
          <h2 data-testid="recipe-title">{ recipe[ref.strTitle] }</h2>
          <h3 data-testid="recipe-category">{ recipe[ref.strCateg] }</h3>
        </div>
        <div>
          <button
            type="button"
            className="bg-transparent border-0"
            id="liveToastBtn"
            data-testid="share-btn"
            // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard - copy to clipboard
            onClick={ () => {
              const link = pathname.includes('progress')
                ? pathname.replace('/in-progress', '')
                : pathname;
              navigator.clipboard.writeText(`http://localhost:3000${link}`);
              setClipboard(true);
            } }
          >
            <img
              src={ shareIcon }
              alt="share icon"
            />
          </button>
          <button
            type="button"
            className="bg-transparent border-0"
            data-testid="favorite-btn"
            onClick={ handleClickFavorite }
            src={ favorite ? 'blackHeartIcon' : 'whiteHeartIcon' }

          >
            <img
              src={ favorite ? blackHeartIcon : whiteHeartIcon }
              alt="favorite icon"
            />
          </button>
          { clipboard && <p>Link copiado!</p> }
        </div>
      </div>
    </section>
  );
}
