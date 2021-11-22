import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
    return ( 
    <View style = { styles.container } >
        <Button style = { styles.btn }  title="BUTTON" color = "white"/>
        <StatusBar style = "auto" / >
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#808080',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn: {
        backgroundColor: '#2196f3',
    }
});