import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isFavorite: false,
    };
  }

  componentDidMount() {
    return this.getLocalFavorites();
  }

  handleFavorites = async (event) => {
    const { checked } = event.target;
    const { album, remove } = this.props;
    this.setState({ isLoading: true });
    if (checked) {
      await addSong(album);
    }
    if (!checked) {
      await removeSong(album);
    }
    if (remove) {
      event.target.parentNode.parentNode.remove();
    }
    this.setState({ isLoading: false });
  }

  getLocalFavorites = async () => {
    const { album } = this.props;
    const { trackId } = album;
    const savedFavs = JSON.parse(localStorage.getItem('favorite_songs'));
    const filtered = savedFavs.find((fav) => fav.trackId === trackId);
    if (filtered !== undefined) { this.setState({ isFavorite: true }); } else {
      this.setState({ isFavorite: false });
    }
  }

  musicPlayer = () => {
    const { isFavorite } = this.state;
    const { album } = this.props;
    const { previewUrl, trackName, trackId } = album;
    return (
      <div className="music-player">
        <p>
          { trackName }
        </p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ trackId } data-testid={ `checkbox-music-${trackId}` }>
          Favorita
          <input
            id={ trackId }
            checked={ isFavorite }
            type="checkbox"
            onClick={ this.handleFavorites }
            onChange={ this.getLocalFavorites }
          />
        </label>
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        { isLoading && (
          <Loading />
        )}
        {this.musicPlayer()}
      </div>
    );
  }
}

MusicCard.propTypes = {
  album: PropTypes.shape({
    previewUrl: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
  }).isRequired,
  remove: PropTypes.bool,
};

MusicCard.defaultProps = {
  remove: false,
};

export default MusicCard;
