import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import ListsScreen from './contact/screen';

export default class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListsScreen />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});
