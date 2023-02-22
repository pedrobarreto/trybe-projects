import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      Collection: '',
      Artwork: '',
      Artist: '',
      Albums: [],
    };
  }

  componentDidMount() {
    this.fetchAPI();
    return this.getFavList();
  }

  fetchAPI = async () => {
    const { match: { params: { id } } } = this.props;
    const response = await getMusics(id);
    this.setState({ Collection: response[0].collectionName });
    this.setState({ Artwork: response[0].artworkUrl100 });
    this.setState({ Artist: response[0].artistName });
    this.setState({ Albums: response });
  }

  getFavList = async () => {
    const favoriteList = await getFavoriteSongs();
    return favoriteList;
  };

  render() {
    const { Artist, Collection, Artwork, Albums } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <h3 data-testid="artist-name">
          {Artist}
        </h3>
        <img src={ Artwork } alt={ Collection } />
        <p data-testid="album-name">
          {Collection}
          <br />
          {Artist}
        </p>
        {
          Albums
            .filter((album) => album.previewUrl !== undefined)
            .map((album) => (
              <MusicCard key={ album.trackId } album={ album } />
            ))
        }
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
