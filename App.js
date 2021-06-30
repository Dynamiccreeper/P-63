import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
       <AppContainer/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

var AppNavigator= createSwitchNavigator({
  HomeScreen: HomeScreen,

})

var AppContainer=createAppContainer(AppNavigator)

