import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumBox from '../components/AlbumBox';
import Loading from '../components/Loading';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      ArtistInput: '',
      Artist: '',
      Albums: [],
      UserSearched: false,
      IsLoading: false,
    };
  }

  handleArtistChange = (event) => {
    if (event.target.value !== undefined) {
      this.setState({ ArtistInput: event.target.value });
    }
  };

  clearInput = () => {
    const { ArtistInput } = this.state;
    this.setState({ Artist: ArtistInput });
    this.setState({ ArtistInput: '' });
    this.setState({ IsLoading: true });
    this.fetchAPI();
  };

  fetchAPI = async () => {
    const { ArtistInput } = this.state;
    const response = await searchAlbumsAPI(ArtistInput);
    this.setState({ Albums: response });
    this.setState({ UserSearched: true });
    this.setState({ IsLoading: false });
  };

  searchInput = () => {
    const { ArtistInput } = this.state;
    const validArtist = 2;
    const enabled = ArtistInput.length >= validArtist;
    return (
      <form>
        <input
          type="text"
          data-testid="search-artist-input"
          value={ ArtistInput }
          onChange={ this.handleArtistChange }
        />
        <input
          type="button"
          value="Pesquisar"
          data-testid="search-artist-button"
          disabled={ !enabled }
          onClick={ this.clearInput }
        />
      </form>
    );
  };

  searchResults = () => {
    const { Artist, Albums, UserSearched } = this.state;
    return (
      UserSearched && (
        <div className="albums-list">
          <div>
            {`Resultado de álbuns de: ${Artist}`}
          </div>
          {Albums.length === 0
            ? 'Nenhum álbum foi encontrado'
            : Albums.map((album) => (
              <AlbumBox key={ album.collectionId } album={ album } />
            ))}
        </div>
      )
    );
  };

  render() {
    const { IsLoading } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <h1>Search</h1>
        {this.searchInput()}
        { IsLoading ? (
          <Loading />
        ) : (
          this.searchResults()
        )}
      </div>
    );
  }
}
export default Search;
