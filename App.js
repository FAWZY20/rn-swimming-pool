import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, Image, SafeAreaView, Text, Alert } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

export default function App() {
    return ( 
    <View style = { styles.container } >
      <View style = { styles.header }>
        <Text style = { styles.white }> Header </Text>
      </View>
      <View>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://lesjoiesducode.fr/content/039/ea9v7hD.jpg',
        }}
      />
      </View>
      <View style = { styles.footer }>
        <Text style={ styles.black}  >Footer</Text>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    logo: {
      width: 400,
      height: 500,
    },
    header: {
      width: 400,
      height: 100,
      backgroundColor: '#000000',
    },
    footer: {
      width: 400,
      height: 100,
      backgroundColor: '#ffffff',
    },
    black: {
      fontSize: 20,
      display: 'flex',
      alignItems: 'center',
      color: 'black',
      marginLeft: 160,
      marginTop: 10,
    },
    white: {
      fontSize: 20,
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      marginLeft: 160,
      marginTop: 50,
    }
});