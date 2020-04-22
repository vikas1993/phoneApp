import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/home'
import AddContact from '../screens/addContact'
import React from 'react'
import Header from '../shared/header'

const screens ={
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: () => <Header title='Contact List' navigation={navigation} />
          }
        },
      },
      AddContact : {
        screen:AddContact,
        navigationOptions:({navigation})=>{
           return{ title:'AddContact',}
        },
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{backgroundColor:'#eee',height:60}
    }
})

export default HomeStack;