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

export function BasicTextInput({placeHolder, width, height, icon}) {
    return(
            <TextInput
            style={{...styles.input, width:width , height:height}}
            onChangeText={()=> console.log("oi")}
            placeholder={placeHolder}
            />
   
    )
}

export function BasicTextInputPlaceHolderKeep({placeHolder, width, height, icon, placeHolderExample}) {
    return(
        <View>
            <TextInput
            style={{...styles.input, width:width , height:height, textAlign:'right'}}
            onChangeText={()=> console.log("oi")}
            placeholder={placeHolderExample}
            placeholderTextColor={Colors.input_text_value}
            />
            <Text style={{position: 'absolute', bottom:28, left:30, fontSize:fonts.f17px, color:Colors.text_opaque}}>{placeHolder}</Text>
        </View>
    )
}

export function PasswordTextInput({placeHolder, width, height}) {

    const[visible, setVisible] = useState(true);
    return(
        <View style={{...styles.input,width: width}}>
            <TextInput
            style={{fontSize:fonts.f17px}}
            onChangeText={()=> console.log("oi")}
            placeholder={placeHolder}
            secureTextEntry={visible}
            />
            
            {visible ?
            
                <FontAwesomeIcon onPress={()=> setVisible(false)} icon={ faEye } size={32} style={{position:'absolute', right:0,  top:10, marginRight:10, color:Colors.text_opaque}} />

            :
                <FontAwesomeIcon onPress={()=> setVisible(true)} icon={ faEyeSlash } size={32} style={{position:'absolute', right:0,  top:10, marginRight:10, color:Colors.text_opaque}} />

            }

        </View>
   
    )
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