import * as React from 'react';
import {useState} from 'react';
import Colors from '../../../assets/Utils/colors.json';
import fonts from '../../../assets/Utils/fontSizes.json';
import {View, StyleSheet, Pressable, TextInput, Text, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp} from '@fortawesome/free-solid-svg-icons';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { TextInputMask } from 'react-native-masked-text'


export function BasicTextInput({placeHolder, width, height, icon}) {
    return(
            <TextInput
            style={{...styles.input, width:width , height:height}}
            onChangeText={()=> console.log("oi")}
            placeholder={placeHolder}
            />
   
    )
}

export function BasicTextInputPlaceHolderKeep({placeHolder, width, height, icon, placeHolderExample, keyboardType, value, setValue}) {
    return(
        <View>
            <TextInput
            multiline={true}
            style={{...styles.input, width:width , height:height, textAlign:'right', zIndex:-1}}
            onChangeText={(e)=> setValue(e)}
            placeholder={placeHolderExample}
            placeholderTextColor={Colors.input_text_value}
            keyboardType={`${keyboardType}`}
            value={""+value}
            />
            <Text style={{position: 'absolute', bottom:28, left:30, fontSize:fonts.f17px, color:Colors.text_opaque}}>{placeHolder}</Text>
        </View>
    )
}

export function MaskedTextInputPlaceHolderKeep({placeHolder, width, height, icon, placeHolderExample, keyboardType, value, setValue, mask}) {
    return(
        <View>
            <TextInputMask multiline 
                style={{...styles.input, width:width , height:height, textAlign:'right', paddingRight:18}}
                    type={'custom'}
                    options={{
                    mask:mask
                }}
                keyboardType={keyboardType}
                placeholder={placeHolderExample}
                value={value}
                onChangeText={text => {
                    setValue(text);
                }}
                />
            <Text style={{position: 'absolute', bottom:28, left:30, fontSize:fonts.f17px, color:Colors.text_opaque}}>{placeHolder}</Text>
        </View>
    )
}

export function MaskedCNPJorCPFTextInputPlaceHolderKeep({placeHolder, width, height, icon, placeHolderExample, keyboardType, value, setValue, mask, type}) {
    return(
        <View>
            <TextInputMask multiline 
                style={{...styles.input, width:width , height:height, textAlign:'right', paddingRight:18}}
                    type={type}
                    options={{
                    mask:mask
                }}
                keyboardType={keyboardType}
                placeholder={placeHolderExample}
                value={value}
                onChangeText={text => {
                    setValue(text);
                }}
                />
            <Text style={{position: 'absolute', bottom:28, left:30, fontSize:fonts.f17px, color:Colors.text_opaque}}>{placeHolder}</Text>
        </View>
    )
}

export function TextAreaInputPlaceHolderKeep({placeHolder, width, height, keyboardType, value, setValue}) {
    return(
        <View>
            <TextInput
                style={{...styles.input, width:width , height:height, textAlign:'left', paddingRight:25, textAlignVertical:'top'}}
                numberOfLines={4}
                onChangeText={(text) => setValue(text)}
                value={value}
                placeholder={placeHolder}/>
            </View>
    )
}

export function BasicNumberInputPlaceHolderKeep({placeHolder, width, height, placeHolderExample, value, setValue}) {
    return(
        <View>
            <TextInput
            style={{...styles.input, width:width , height:height, textAlign:'right', paddingRight:65}}
            onChangeText={(e)=> setValue(e)}
            placeholder={placeHolderExample}
            placeholderTextColor={Colors.input_text_value}
            keyboardType={'numeric'}
            value={""+value}
            />
            <Text style={{position: 'absolute', bottom:28, left:30, fontSize:fonts.f17px, color:Colors.text_opaque}}>{placeHolder}</Text>
            <FontAwesomeIcon onPress={()=> setValue(addNumber(value))} icon={ faChevronUp } size={24} style={{position:'absolute', right:13,  top:15, marginRight:20, color:Colors.text_opaque}} />
            <FontAwesomeIcon onPress={()=> setValue(subtractNumber(value))} icon={ faChevronDown } size={24} style={{position:'absolute', right:13,  top:35, marginRight:20, color:Colors.text_opaque}} />

        </View>
    )
}

export function BasicComboBoxInput({height, width, placeHolder, value, setValue}) {
    return(
        <View style={{...styles.input, width:width , height:height, textAlign:'right'}}>
            <Picker
            mode={'dropdown'}
            itemStyle={{textAlign:'right', color:'white'}}
            selectedValue={value}
                onValueChange={(itemValue, itemIndex) =>
                    setValue(itemValue)
                }>
                <Picker.Item label="Mesa" value="Mesa" />
                <Picker.Item label="Delivery" value="Delivery" />
            </Picker>
        </View>

    )
}

function addNumber(value) {
    if(value == ""){
       return value = 1;
    }

    return parseInt(value) + 1;

}


function subtractNumber(value) {
    if(value == ""){
       return value = 0;
    }

    if(parseInt(value)- 1 >= 0){
        return parseInt(value) - 1;
    }

}

export function BasicComboBoxInputPlaceHolderKeep({placeHolder, width, height, placeHolderExample}) {
    const [value, setValue] = useState(0);
    return(
        <View>
            <TextInput
            style={{...styles.input, width:width , height:height, textAlign:'right', paddingRight:45}}
            onChangeText={(e)=> setValue(e)}
            placeholder={placeHolderExample}
            placeholderTextColor={Colors.input_text_value}
            keyboardType={'numeric'}
            value={""+value}
            />
            <Text style={{position: 'absolute', bottom:28, left:30, fontSize:fonts.f17px, color:Colors.text_opaque}}>{placeHolder}</Text>
            <FontAwesomeIcon onPress={()=> {setValue(parseInt(value)+1); console.log(value)}} icon={ faChevronUp } size={24} style={{position:'absolute', right:0,  top:15, marginRight:20, color:Colors.text_opaque}} />
            <FontAwesomeIcon onPress={()=> setValue(parseInt(value)-1)} icon={ faChevronDown } size={24} style={{position:'absolute', right:0,  top:35, marginRight:20, color:Colors.text_opaque}} />

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
        padding: 15,
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