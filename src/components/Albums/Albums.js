import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
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
      <ScrollView contentContainerStyle={{ justifyContent: 'space-between', paddingBottom: 10 }}>
        {
          albums.length ?
            this.renderAlbums() :
            <Text>There are no albums availabe</Text>
        }
      </ScrollView>
    );
  }
}

export default Albums;
