import * as React from 'react';
import Colors from '../../assets/Utils/colors.json';
import fonts from '../../assets/Utils/fontSizes.json';
import {View, StyleSheet, Pressable, Text, ImageBackground} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen, faCamera} from '@fortawesome/free-solid-svg-icons';

export function ProfilePhoto({width, height, image}) {

    return(
        <>
        <View style={{width: width, height:height, display: 'flex', alignItems: 'center'}}>
            <ImageBackground
                style={{width:150, height:150, position:'absolute', shadowColor:'black'}}
                imageStyle={{borderRadius:75, borderColor:Colors.white_color, borderWidth:1, backgroundColor:Colors.white_color}}
                source={image}
                >
                <FontAwesomeIcon onPress={()=> setVisible(false)} icon={ faCamera } size={32} style={{position:'absolute', right:-5,  bottom:0, marginRight:10, color:Colors.white_color}} />
                </ImageBackground>
            <FontAwesomeIcon onPress={()=> setVisible(false)} icon={ faPen } size={24} style={{position:'absolute', right:0,  top:5, marginRight:10, color:Colors.white_color}} />
        </View>
        <Text style={{fontWeight:'bold', color:Colors.white_color, fontSize:fonts.f20px}}>Lucas Rodrigues Barboza</Text>
        </>
    )
}


const styles = StyleSheet.create({
 
});