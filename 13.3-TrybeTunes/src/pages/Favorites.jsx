import React, { Component } from 'react';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
    };
  }

  componentDidMount() {
    this.getFavList();
  }

  getFavList = async () => {
    const favoriteList = await getFavoriteSongs();
    this.setState({ favorites: favoriteList });
  };

  render() {
    const { favorites } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        { favorites.map((fav) => (
          <MusicCard key={ Number(fav.trackId) } album={ fav } remove />
        ))}
      </div>
    );
  }
}
export default Favorites;
