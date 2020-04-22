import { createStackNavigator } from 'react-navigation-stack';
import FavContact from '../screens/favContact';
import React from 'react'
import Header from '../shared/header'

const screens = {
  FavContact: {
    screen: FavContact,
    navigationOptions: ({navigation})=>{
      return {
        headerTitle: () => <Header title='Fav Contact' navigation ={navigation}/>
      }
    },
  },
}

const FavStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default FavStack;  