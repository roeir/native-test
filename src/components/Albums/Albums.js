import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import Album from './Album';

class Albums extends Component {
  state = { albums: [] };
  componentDidMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(({ data }) => {
        this.setState({ albums: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  renderAlbums() {
    const { albums } = this.state;
    return albums.map(album => (
      <Album
        key={album.title}
        album={album}
      />
    ));
  }
  render() {
    const { albums } = this.state;
    return (
      <View>
        {
          albums.length ?
            this.renderAlbums() :
            <Text>There are no albums availabe</Text>
        }
      </View>
    );
  }
}

export default Albums;
