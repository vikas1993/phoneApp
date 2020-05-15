import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text ,TouchableOpacity,Image,TextInput,Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {useSelector,useDispatch} from 'react-redux';
import {addContact} from '../action'

export default function AddContact({ navigation }) {
  const [loading,setLoading] = useState(false)
  const [resourcePath,setResourcePath] = useState('')
  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [landline,setLandline] = useState('')
  const [isFav,setIsFav] = useState(false)
  const [isUpdate,setUpdate] = useState(false)
  const counter = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(navigation.state.params != undefined){
      setUpdate(true)
      setName(navigation.state.params.name)
      setPhone(navigation.state.params.phone)
      setLandline(navigation.state.params.landline)
      setIsFav(navigation.state.params.isFav)
      if(navigation.state.params.img != ''){
        setResourcePath(navigation.state.params.img)
        setLoading(true)
      }
    
    }

  },[])
 
  selectFile = () => {
    var options = {
      title: 'Select Image',
    
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      //console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        setResourcePath(source)
        setLoading(true)
      }
    });
  };

  handleName = (text) => {
    setName(text)
 }
 handleMobile = (text) => {
  setPhone(text)
}
 handleLandline = (text) => {
  setLandline(text)
}

onSave=()=> {
  if(name == ''){
    alert('please enter your name')
  }else if(phone == ''){
    alert('please enter your phone')
  }else{
    console.log('save the data here ')
    const contact = {}
    contact['name'] = name
    contact['phone'] = phone
    contact['img'] = resourcePath
    contact['key'] = phone
    contact['isFav'] = isFav
    contact['landline'] = landline

    //console.log('data',contact)
    dispatch(addContact(contact))
    navigation.goBack()
  }
 // const { navigation } = this.props;
  //navigation.goBack();
  //navigation.state.params.onSelect({ 'name': this.state.name,'mobile':this.state.mobile,'isFav':this.state.isFav,'resourcePath':this.state.resourcePath,'loadingImage':this.state.loadingImage });
}

toggleFav=() =>{
  setIsFav(!isFav)
}
  return (
    <View style={styles.root}>
    <View style={ styles.imageContainer} >
    <TouchableOpacity  onPress={selectFile}>
          <Image
          source = { loading
     ? 
     {uri: 'data:image/jpeg;base64,' + resourcePath.data, } 
     : 
      require('../images/defThumb.png')}
       
       style={{ width: 100, height: 100,borderRadius: 100/2 }}
      
     />
     </TouchableOpacity>
     </View>
<View style={styles.rowContainer}>
<Text style={styles.text}>Name</Text>
<TextInput
 autoCorrect={false}
 onChangeText={handleName}
 value={name}
 style={styles.textInput}
/>
</View>
<View style={styles.rowContainer}>
<Text style={styles.text}>Mobile</Text>
<TextInput
 autoCorrect={false}
 keyboardType='phone-pad'
 onChangeText={handleMobile}
 value={phone}
 style={styles.textInput}
/>
</View>
<View style={styles.rowContainer}>
<Text style={styles.text}>Landline</Text>
<TextInput
 autoCorrect={false}
 keyboardType='phone-pad'
 onChangeText={handleLandline}
 value={landline}
 style={styles.textInput}
/>
</View>
<View style={ styles.rowContainer} >
             <Button style={styles.bottomView}
             title="Save"
             onPress={onSave}
             />
          </View>
          <View style={ styles.rowContainer} >
             <Button style={styles.bottomView}
             title={isFav?"Unmark Favorite":"Mark Favorite"}
             onPress={toggleFav}
             />
          </View>            
</View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
  },
  rowContainer: {
    height: 40,
    flexDirection: "row",
    marginTop:30,
    padding:20,
    justifyContent:'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 110,
    flexDirection: "row",
    marginTop:30,
    padding:20,
    justifyContent:'center',
    alignItems: 'center',
  },
  text:{

    width:60
  },
  bottomView:{
    
         width: '100%', 
         height: 50, 
         backgroundColor: '#FF9800', 
         justifyContent: 'center', 
         alignItems: 'center',
         position: 'absolute',
         bottom: 0
       },
    
  Button: {
    position: 'absolute',
    bottom:0,
    left:0,
},
  
  textInput: {
    flex: 1,
    backgroundColor: 'white', 
    borderColor: 'black',
    marginLeft:10,
    height: 40,
     borderColor: 'gray',
      borderWidth: 1
  }
})