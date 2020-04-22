import { AsyncStorage} from 'react-native';

//action types

export const GET_CONTACT_LIST = 'GET_CONTACT_LIST'
export const ADD_CONTACT = 'ADD_CONTACT'
export const GET_FAV_CONTACT = 'GET_FAV_CONTACT'

//action creaters

export function getContactList(){
    return async (dispatch) => {
        try {
            const keys = await AsyncStorage.getAllKeys()
            console.log('keys '+keys)
            let objArr = []
            await AsyncStorage.multiGet(keys,(error,stores)=>{
              stores.map((result,i,stores)=>{
                let value = stores[i][1]
                objArr.push(JSON.parse(value))
                //console.log('value = '+value)
              })
            })

            dispatch({type:GET_CONTACT_LIST,payload:objArr})
          } catch(e) {
             //error reading value
            console.log('error',e)
          }
    }
}
export function getFavContactList(){
    return async (dispatch) => {
        try {
            const keys = await AsyncStorage.getAllKeys()
            console.log('keys '+keys)
            let objArr = []
            await AsyncStorage.multiGet(keys,(error,stores)=>{
              stores.map((result,i,stores)=>{
                let value = stores[i][1]
                let contact = JSON.parse(value)
                if(contact.isFav){
                    objArr.push(contact)
                }
              })
            })

            dispatch({type:GET_FAV_CONTACT,payload:objArr})
          } catch(e) {
             //error reading value
            console.log('error',e)
          }
    }
}
export function addContact(contact){
    return async (dispatch) =>{
        try {
            const save = await AsyncStorage.setItem(contact.phone,JSON.stringify(contact))
            console.log('data saved'+save) 
            dispatch({type:ADD_CONTACT,payload:save})
          } catch (error) {
            // Error saving data
            console.error(error)
          }
    }
}