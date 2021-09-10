import * as React from 'react';
import {useState} from 'react';
import Colors from '../../../assets/Utils/colors.json';
import fonts from '../../../assets/Utils/fontSizes.json';
import {View, StyleSheet, Pressable, TextInput, Text, ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faBars} from '@fortawesome/free-solid-svg-icons';

export function FilterTextInput({placeHolder, width, height}) {
    return(
            <TextInput
            style={{...styles.input, width:width , height:height, color:'white'}}
            onChangeText={()=> console.log("oi")}
            keyboardType='numeric'
            placeholder={placeHolder}
            />
   
    )
}


const styles = StyleSheet.create({
   input: {
        fontSize:fonts.f17px,
        borderColor:Colors.white_color,
        borderRadius:10,
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