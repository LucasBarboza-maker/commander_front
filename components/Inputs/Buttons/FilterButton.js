import * as React from 'react';
import {useState} from 'react';
import Colors from '../../../assets/Utils/colors.json';
import fonts from '../../../assets/Utils/fontSizes.json';
import {View, StyleSheet, Pressable, TextInput, Text, ScrollView} from 'react-native';


export function FilterButtonBasic({width, activeColor, NameInfo}) {

    const[active, setActive] = useState(false);
    if(active){
    return(
        <Pressable onPress={() => setActive(false)}  style={{backgroundColor:Colors.green_opaque, padding:10, fontSize:fonts.f15px, minWidth:width, textAlign:'center',borderColor:Colors.white_color, borderWidth:1, borderRadius:10, marginRight:10}}>
            <Text style={{color:Colors.white_color, fontSize:fonts.f15px, textAlign:'center', fontWeight:'bold'}}>{NameInfo}</Text>
        </Pressable>
    )
    }else{
      return(
        <Pressable onPress={() => setActive(true)}  style={{backgroundColor:Colors.transparent, padding:10, fontSize:fonts.f15px, minWidth:width, textAlign:'center',borderColor:Colors.white_color, borderWidth:1, borderRadius:10, marginRight:10}}>
            <Text style={{color:Colors.white_color, fontSize:fonts.f15px, textAlign:'center', fontWeight:'bold'}}>{NameInfo}</Text>
        </Pressable>
    ) 
    }
    
}



const styles = StyleSheet.create({
    input: {
         fontSize:fonts.f17px,
         borderColor:Colors.border_opaque,
         borderRadius:10,
         margin: 12,
         borderWidth: 1,
         padding: 10,
     },
   inputFilter: {
     position:'absolute',
     top:15,
     fontSize:fonts.f17px,
     borderColor:Colors.border_opaque,
     borderRadius:10,
     borderWidth: 1,
     padding: 10,
     elevation:8
   },
 });
