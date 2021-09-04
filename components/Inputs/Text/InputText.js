import * as React from 'react';
import {useState} from 'react';
import Colors from '../../../assets/Utils/colors.json';
import fonts from '../../../assets/Utils/fontSizes.json';
import {View, StyleSheet, Pressable, TextInput} from 'react-native';
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

export function FilterInputText({placeHolder, width, height}) {

    const[visible, setVisible] = useState(true);
    return(
        <View style={{...styles.inputFilter,width: width, height:height, backgroundColor:'white'}}>
            <FontAwesomeIcon onPress={()=> setVisible(false)} icon={ faSearch } size={32} style={{position:'absolute', left:5,  top:5, marginRight:10, color:Colors.text_opaque}} />
            <TextInput
            style={{fontSize:fonts.f17px, paddingLeft:40}}
            onChangeText={()=> console.log("oi")}
            placeholder={'Pesquisar'}
            secureTextEntry={visible}
            />
            <FontAwesomeIcon onPress={()=> setVisible(false)} icon={ faBars } size={32} style={{position:'absolute', right:0,  top:5, marginRight:10, color:Colors.text_opaque}} />
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
    top:25,
    fontSize:fonts.f17px,
    borderColor:Colors.border_opaque,
    borderRadius:10,
    borderWidth: 1,
    padding: 10,
    elevation:8
  },
});