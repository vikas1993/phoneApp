import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function Header({title,navigation}){
    const openMenu =() =>{
        navigation.openDrawer();
    }

    return (
        <View style ={styles.header}>
            <Icon  name='md-menu'   size={30}  onPress={openMenu}  />
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#333',
      letterSpacing: 1,
      left: 36
    },
    icon: {
      paddingLeft: 16,
    }
  });