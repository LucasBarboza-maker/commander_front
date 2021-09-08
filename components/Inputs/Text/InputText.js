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

    const[activeFilter, setActiveFilter] = useState(false);
    if(activeFilter == true){  
    return(
    
        <View style={{width: '100%', height:330, backgroundColor:Colors.main_color, borderRadius:15}}>
            <FontAwesomeIcon onPress={()=> setActiveFilter(false)} icon={ faBars } size={32} style={{position:'absolute', right:0,  top:5, marginRight:10, color:Colors.text_opaque, zIndex:10}} />
            <Text style={{color:Colors.white_color, fontWeight:'bold', textAlign:'center', fontSize:fonts.f20px}}>Filtro</Text>
            <View>
                <Text style={{color:Colors.white_color, fontWeight:'bold', fontSize:fonts.f17px}}>Garçons</Text>
                    <ScrollView
                    horizontal={true}
                    style={{marginTop:10}}
                    >
                        <View  style={{padding:10, fontSize:fonts.f15px, width:125, textAlign:'center',borderColor:Colors.white_color, borderWidth:1, borderRadius:10, marginRight:10}}>
                            <Text style={{color:Colors.white_color, fontSize:fonts.f15px, textAlign:'center', fontWeight:'bold'}}>Gustavo</Text>
                        </View>
                        <View  style={{padding:10, fontSize:fonts.f15px, width:125, textAlign:'center',borderColor:Colors.white_color, borderWidth:1, borderRadius:10, marginRight:10}}>
                            <Text style={{color:Colors.white_color, fontSize:fonts.f15px, textAlign:'center', fontWeight:'bold'}}>Gustavo</Text>
                        </View>
                        <View  style={{padding:10, fontSize:fonts.f15px, width:125, textAlign:'center',borderColor:Colors.white_color, borderWidth:1, borderRadius:10, marginRight:10}}>
                            <Text style={{color:Colors.white_color, fontSize:fonts.f15px, textAlign:'center', fontWeight:'bold'}}>Gustavo</Text>
                        </View>
                        <View  style={{padding:10, fontSize:fonts.f15px, width:125, textAlign:'center',borderColor:Colors.white_color, borderWidth:1, borderRadius:10, marginRight:10}}>
                            <Text style={{color:Colors.white_color, fontSize:fonts.f15px, textAlign:'center', fontWeight:'bold'}}>Gustavo</Text>
                        </View>
                        <View  style={{padding:10, fontSize:fonts.f15px, width:125, textAlign:'center',borderColor:Colors.white_color, borderWidth:1, borderRadius:10, marginRight:10}}>
                            <Text style={{color:Colors.white_color, fontSize:fonts.f15px, textAlign:'center', fontWeight:'bold'}}>Gustavo</Text>
                        </View>
                    </ScrollView>
                    <Text style={{color:Colors.white_color, fontWeight:'bold', fontSize:fonts.f17px, marginTop:20}}>Tipo</Text>
                    <ScrollView
                    horizontal={true}
                    style={{marginTop:10}}
                    >
                        <View style={{padding:10, fontSize:fonts.f15px, width:125, textAlign:'center',borderColor:Colors.white_color, borderWidth:1, borderRadius:10, marginRight:10}}>
                            <Text style={{color:Colors.white_color, fontSize:fonts.f15px, textAlign:'center', fontWeight:'bold'}}>Entrega</Text>
                        </View>
                        <View  style={{padding:10, fontSize:fonts.f15px, width:125, textAlign:'center',borderColor:Colors.white_color, borderWidth:1, borderRadius:10, marginRight:10}}>
                            <Text style={{color:Colors.white_color, fontSize:fonts.f15px, textAlign:'center', fontWeight:'bold'}}>Mesa</Text>
                        </View>
                    </ScrollView>
                    <Pressable style={{marginTop:30, padding:10, fontSize:fonts.f15px, width:'100%', textAlign:'center', backgroundColor:Colors.green_opaque, borderRadius:10, marginRight:10}}>
                        <Text style={{fontSize:fonts.f20px, textAlign:'center', color:Colors.white_color}}>Aplicar</Text>
                    </Pressable>
                    <Pressable onPress={()=> setActiveFilter(false)} style={{marginTop:10, padding:10, fontSize:fonts.f15px, width:'100%', textAlign:'center',borderColor:Colors.white_color, borderWidth:1, borderRadius:10, marginRight:10}}>
                        <Text style={{fontSize:fonts.f20px, textAlign:'center', color:Colors.white_color}}>Cancelar</Text>
                    </Pressable>
            </View>
        </View>
    )
    }else if(activeFilter == false){
        return(
    
            <View style={{...styles.inputFilter,width: width, height:height, backgroundColor:'white'}}>
                <FontAwesomeIcon icon={ faSearch } size={32} style={{position:'absolute', left:5,  top:5, marginRight:10, color:Colors.text_opaque}} />
                <TextInput
                style={{fontSize:fonts.f17px, paddingLeft:40}}
                onChangeText={()=> console.log("oi")}
                placeholder={'Pesquisar'}
                />
                <FontAwesomeIcon onPress={()=> setActiveFilter(true)} icon={ faBars } size={32} style={{position:'absolute', right:0,  top:5, marginRight:10, color:Colors.text_opaque}} />
            </View>
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