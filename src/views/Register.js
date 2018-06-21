import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

// TODO
import LoginScreen2 from './login/screen2';

export default class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          decelerationRate={0.993}
        >
          <LoginScreen2 />
        </ScrollView>
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
