import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image,FlatList ,AsyncStorage} from 'react-native';
import { globalStyles } from '../styles/global';
import ActionButton from 'react-native-action-button';
import {useSelector,useDispatch} from 'react-redux';
import {getFavContactList} from '../action'

export default function FavContact({navigation}) {

  const counter = useSelector(state => state.data);
  const dispatch = useDispatch();

 
  useEffect(()=>{
    navigation.addListener('didFocus',
    ()=>{
      dispatch(getFavContactList());
    })
  },[])
  return (
    <View style={globalStyles.container}>
      <FlatList data={counter} renderItem={({ item }) => (
        <>
        <View style = {{flex:1,flexDirection:'row',padding:5}}>
          <Image  source={item.img == ''?require('../images/defThumb.png'):{uri: 'data:image/jpeg;base64,' + item.img.data, } } style = {styles.tinyLogo}/>
        <TouchableOpacity >
          <Text style={globalStyles.titleText}>{ item.name }</Text>
        </TouchableOpacity>
        </View>
        </>
      )} 
      />
      <ActionButton
  buttonColor="rgba(231,76,60,1)"
  onPress={() => navigation.navigate('AddContact')}
/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginEnd:5,
  },
  logo: {
    width: 66,
    height: 58,
  },
});