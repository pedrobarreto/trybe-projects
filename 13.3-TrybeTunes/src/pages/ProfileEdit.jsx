import React, { Component } from 'react';
import Header from '../components/Header';

class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <h1>Edit Profile</h1>
      </div>
    );
  }
}
export default ProfileEdit;
