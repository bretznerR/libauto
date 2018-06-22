import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import HomeScreen from './home/screen';

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HomeScreen />
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
