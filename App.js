import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView} from 'react-native';

export default function App() {
    return ( 
      <ScrollView style = { styles.container }>
        <View style = { styles.violet } />
        <View style = { styles.blocRouge }>
          <View style = { styles.rouge } />
          <View style = { styles.rouge } />
          <View style = { styles.rouge } />     
        </View>
        <View style = { styles.violet } />
        <View style = { styles.blocRouge }>
          <View style = { styles.rouge } />
          <View style = { styles.rouge } />
          <View style = { styles.rouge } />     
        </View>
        <View style = { styles.violet } />
        <View style = { styles.blocRouge }>
          <View style = { styles.rouge } />
          <View style = { styles.rouge } />
          <View style = { styles.rouge } />     
        </View>
        <View style = { styles.violet } />
        <View style = { styles.blocRouge }>
          <View style = { styles.rouge } />
          <View style = { styles.rouge } />
          <View style = { styles.rouge } />     
        </View>
        <View style = { styles.violet } />
        <View style = { styles.blocRouge }>
          <View style = { styles.rouge } />
          <View style = { styles.rouge } />
          <View style = { styles.rouge } />     
        </View>
        <View style = { styles.violet } />
        <View style = { styles.blocRouge }>
          <View style = { styles.rouge } />
          <View style = { styles.rouge } />
          <View style = { styles.rouge } />     
        </View>
        <View style = { styles.violet } />
        <View style = { styles.blocRouge }>
          <View style = { styles.rouge } />
          <View style = { styles.rouge } />
          <View style = { styles.rouge } />     
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    violet: {
      width: 200,
      height: 150,
      backgroundColor: "#ff00fe",
    },
    blocRouge: {
      display: 'flex',
      flexDirection: 'row',
      paddingTop: 10,
      paddingBottom: 10
    },
    rouge: {
      width: 100,
      height: 120,
      backgroundColor: "#fe0100",
      marginRight: 10,
    }
});