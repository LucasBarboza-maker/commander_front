import * as React from 'react';
import Colors from '../../assets/Utils/colors.json';
import fonts from '../../assets/Utils/fontSizes.json';
import {View, StyleSheet, Pressable, Text, ImageBackground} from 'react-native';

export function EllipseImage({width, height, image, text}) {

    return(
        <>
        <View style={{width: width, height:height, display: 'flex', alignItems: 'center'}}>
            <ImageBackground
                style={{width:150, height:150, position:'absolute', shadowColor:'black'}}
                imageStyle={{borderRadius:75, borderColor:Colors.white_color, borderWidth:1, backgroundColor:Colors.white_color}}
                source={image}
                >
               </ImageBackground>
        </View>
        <Text style={{fontWeight:'bold', color:Colors.white_color, fontSize:fonts.f23px}}>{text}</Text>
        </>
    )
}


const styles = StyleSheet.create({
 
});