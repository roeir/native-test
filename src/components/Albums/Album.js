import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';

import Card from '../Card/Card';
import CardSection from '../Card/CardSection';

const Album = ({ album }) => {
  return (
    <Card>
      <CardSection>
        <View>
          <Image style={{ width: 50, height: 50 }} source={{ uri: album.thumbnail_image }} />
        </View>
        <View>
          <Text>{ album.artist.toUpperCase() }</Text>
          <Text>{ album.title }</Text>
        </View>
      </CardSection>
    </Card>
  );
};

Album.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    thumbnail_image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Album;
