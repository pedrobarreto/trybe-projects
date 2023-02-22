// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  textInput() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="searchText">
        Inclui o texto:
        <input
          name={ searchText }
          onChange={ onSearchTextChange }
          value={ searchText }
          type="text"
          id="searchText"
          data-testid="text-input"
        />

      </label>
    );
  }

  checkboxInput() {
    const { onBookmarkedChange, bookmarkedOnly } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="favorites">
        Mostrar somente favoritos
        <input
          name="favorites"
          onChange={ onBookmarkedChange }
          checked={ bookmarkedOnly }
          type="checkbox"
          id="favorites"
          data-testid="checkbox-input"
        />

      </label>
    );
  }

  selectInput() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="gender">
        Filtrar por gênero
        <select
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
          id="gender"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          { this.textInput() }
          { this.checkboxInput() }
          { this.selectInput() }
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,

};

export default SearchBar;
