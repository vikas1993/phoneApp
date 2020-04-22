import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer } from 'react-navigation'


import HomeStack from './homeStack'
import FavStack from './favStack'


// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: HomeStack,
    },
    FavContact: {
      screen: FavStack,
    },
  });
  
  export default createAppContainer(RootDrawerNavigator);