import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumBox extends Component {
  render() {
    const { album } = this.props;
    const { artworkUrl100, collectionName, collectionId } = album;
    return (
      <div>
        <p>{ collectionName }</p>
        <img src={ artworkUrl100 } alt={ collectionName } />
        <Link
          to={ `/album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          Ver
        </Link>
      </div>
    );
  }
}
AlbumBox.propTypes = {
  album: PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    collectionId: PropTypes.number.isRequired,
  }).isRequired,
};
export default AlbumBox;
