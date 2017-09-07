import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  PixelRatio,
  Linking,
} from 'react-native';

import Card from '../Card/Card';
import CardSection from '../Card/CardSection';
import OrderButton from '../Button/OrderButton';

const styles = {
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  thumbnail: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  albumImage: {
    flex: 1,
    width: null,
    height: 350,
  },
};

const handleButtonPress = url => () =>
  Linking.openURL(url)
    .catch(err => console.error(err));


const Album = ({ album }) => {
  const { thumbnail_image, artist, title, image, url } = album;
  const { header, thumbnail, albumImage } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnail}>
          <Image
            style={{ width: 70, height: 70, borderRadius: (70 / PixelRatio.get()) * 100 }}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View>
          <Text style={header}>{ artist.toUpperCase() }</Text>
          <Text style={header}>{ title }</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={albumImage}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <OrderButton
          title="Order"
          onPress={handleButtonPress(url)}
        />
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
