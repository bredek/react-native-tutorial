import React, { Component } from 'react';
import { Text, View } from 'react-native';

import axios from 'axios';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }
  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }
  renderAlbums() {
    return this.state.albums.map(item => <Text key={item.title}>{item.title}</Text>);
  }
  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
