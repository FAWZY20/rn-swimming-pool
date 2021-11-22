import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

export default function App() {
    return ( 
    <View style = { styles.container } >
      <Button title="BUTTON" onPress={() => Alert.alert('Simple Button pressed')}/>
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
    Button: {
        backgroundColor: '#2196f3',
     }
});