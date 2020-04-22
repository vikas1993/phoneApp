import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image,FlatList ,AsyncStorage} from 'react-native';
import { globalStyles } from '../styles/global';
import ActionButton from 'react-native-action-button';
import {useSelector,useDispatch} from 'react-redux';
import {getContactList} from '../action'

export default function Home({ navigation }) {
  const counter = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(()=>{
    navigation.addListener('didFocus',
    ()=>{
      dispatch(getContactList());
    })
  },[])
  
  return (
    <View style={globalStyles.container}>
      <FlatList data={counter} renderItem={({ item }) => (
        <>
        <View style = {{flex:1,flexDirection:'row',padding:5}}>
          <Image  source={item.img == ''?require('../images/defThumb.png'):{uri: 'data:image/jpeg;base64,' + item.img.data, } } style = {styles.tinyLogo}/>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('AddContact', item)}>
          <Text style={globalStyles.titleText}>{ item.name }</Text>
        </TouchableOpacity>
        <Text style={globalStyles.subTitleText}>{ item.phone }</Text>
        </View>
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
    borderRadius:100/2,
  },
  logo: {
    width: 66,
    height: 58,
  },
});