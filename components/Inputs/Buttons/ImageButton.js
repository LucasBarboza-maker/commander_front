import * as React from 'react';
import Colors from '../../../assets/Utils/colors.json';
import { LinearGradient } from 'expo-linear-gradient';
import {Pressable, Text, ImageBackground} from 'react-native';
import Fonts from '../../../assets/Utils/fontSizes.json'

export function ImageButtonManageStablishment({width, height, text, resizeMode, source}) {
    return(
        <Pressable onPress={() => console.log(text)} style={{elevation:5, width:width, height:height, marginTop:17, borderRadius:10, display:'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
             
            <ImageBackground
                style={{width:'100%', height:'100%', position:'absolute', shadowColor:'black'}}
                imageStyle={{borderRadius:10}}
                source={require('../../../assets/myImages/BackgroundImages/gerenciar_restaurante.jpg')}>
                    <LinearGradient
                    start={[0,0]}
                    colors={['transparent','rgba(0,0,0,1)']}
                    style={{position: 'absolute', left: 0, top:0, right: 0, bottom:0, height:'100%', borderRadius:10}}
                />
            </ImageBackground>
            <Text style={{fontSize: Fonts.f20px, fontWeight:'bold', color:'white'}}>{text}</Text>

        </Pressable>
    )
}


export function ImageButtonPrinter({width, height, text, resizeMode, source}) {
    return(
        <Pressable onPress={() => console.log(text)} style={{elevation:5, width:width, height:height, marginTop:17, borderRadius:10, display:'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
             
            <ImageBackground
                style={{width:'100%', height:'100%', position:'absolute', shadowColor:'black'}}
                imageStyle={{borderRadius:10}}
                source={require('../../../assets/myImages/BackgroundImages/impressora.jpg')}>
                    <LinearGradient
                    start={[0,0]}
                    colors={['transparent','rgba(0,0,0,1)']}
                    style={{position: 'absolute', left: 0, top:0, right: 0, bottom:0, height:'100%', borderRadius:10}}
                />
            </ImageBackground>
            <Text style={{fontSize: Fonts.f20px, fontWeight:'bold', color:'white'}}>{text}</Text>

        </Pressable>
    )
}


export function ImageButtonOrder({width, height, text, resizeMode, source}) {
    return(
        <Pressable onPress={() => console.log(text)} style={{elevation:5, width:width, height:height, marginTop:17, borderRadius:10, display:'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
             
            <ImageBackground
                style={{width:'100%', height:'100%', position:'absolute', shadowColor:'black'}}
                imageStyle={{borderRadius:10, bottom:10}}
                source={require('../../../assets/myImages/BackgroundImages/comandar_pedido.jpg')}>
                    <LinearGradient
                    start={[0,0]}
                    colors={['transparent','rgba(0,0,0,1)']}
                    style={{position: 'absolute', left: 0, top:0, right: 0, bottom:0, height:'100%', borderRadius:10}}
                />
            </ImageBackground>
            <Text style={{fontSize: Fonts.f20px, fontWeight:'bold', color:'white'}}>{text}</Text>

        </Pressable>
    )
}