import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Instructions({ stepProgress, progress }) {
  const { detail } = useSelector((state) => state);
  const key = Object.keys(detail)[0];
  const { pathname } = window.location;
  const recipe = detail[key][0];
  const { strInstructions } = recipe;
  const ingredients = [];
  const measures = [];
  function addIngredientsAndMeasures() {
    let stop = true;
    for (let i = 1; stop; i += 1) {
      if (recipe[`strIngredient${i}`] === '' || !recipe[`strIngredient${i}`]) {
        stop = false;
      } else {
        ingredients.push(recipe[`strIngredient${i}`]);
        measures.push(recipe[`strMeasure${i}`]);
      }
    }
  }
  const saveLocalStorage = () => {
    const localStorageObj = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (pathname.includes('comidas')) {
      const labels = document.querySelector('.all-ingredients');
      localStorageObj.meals = {
        ...localStorageObj.meals,
        [pathname.split('/')[2]]: labels.innerHTML,
      };
    } else if (pathname.includes('bebidas')) {
      const labels = document.querySelector('.all-ingredients');
      localStorageObj.drinks = {
        ...localStorageObj.drinks,
        [pathname.split('/')[2]]: labels.innerHTML,
      };
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(localStorageObj));
  };
  addIngredientsAndMeasures();
  const handleChangeProgress = ({ target }) => {
    target.parentNode.classList.toggle('done');
    saveLocalStorage();
  };
  const forNormalRecipe = (ingredient, index) => (
    <p data-testid={ `${index}-${stepProgress}` } className="ingredients">
      {`${ingredient} - ${measures[index]}`}
    </p>
  );
  const forProgressRecipe = (ingredient, index) => (
    <div>
      <label
        htmlFor={ index }
        className="ingredient"
        data-testid={ `${index}-${stepProgress}` }
        onChange={ handleChangeProgress }
      >
        <input type="checkbox" id={ index } />
        {`${ingredient} - ${measures[index]}`}
      </label>
    </div>
  );
  return (
    <section>
      <div className="all-ingredients">
        { ingredients.map((ingredient, index) => (
          <div key={ index } className="d-flex">
            { progress
              ? forProgressRecipe(ingredient, index)
              : forNormalRecipe(ingredient, index) }
          </div>
        ))}
      </div>
      <div>
        <p data-testid="instructions">{ strInstructions }</p>
      </div>
    </section>
  );
}

Instructions.propTypes = {
  progress: PropTypes.bool,
  stepProgress: PropTypes.string,
};
Instructions.defaultProps = {
  progress: false,
  stepProgress: 'ingredient-name-and-measure',
};
