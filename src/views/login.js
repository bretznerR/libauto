import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

// TODO
import LoginScreen from './login/screen';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    decelerationRate={0.993}
                >
                    <LoginScreen/>
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
