import * as React from 'react';
import {useState} from 'react';
import Colors from '../../assets/Utils/colors.json';
import fonts from '../../assets/Utils/fontSizes.json';
import {View, StyleSheet, Pressable, Text, ImageBackground} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faHome, faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faMotorcycle} from '@fortawesome/free-solid-svg-icons';

export function TableCard({title, description, employer, delivery, width, height}) {

    const[visible, setVisible] = useState(true);
    return(
        <View style={{width: width, height:height, backgroundColor:'white', zIndex:-1, borderBottomWidth:1,display: 'flex', flexDirection:'row', padding:10, borderColor:Colors.border_opaque}}>
            <View style={{width:'70%', height:'100%'}}>
                <Text style={{fontSize:fonts.f20px}}>{title}</Text>
                <Text style={{color:Colors.text_opaque}}>{description}</Text>
            </View>
            <View style={{width:'30%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems: 'flex-end'}}>
                <Text style={{ fontSize:fonts.f17px}}>{employer}</Text>
                <View style={{backgroundColor:Colors.green_dark, borderRadius:5, padding:5}}>
                    {delivery? 
                        <FontAwesomeIcon onPress={()=> setVisible(false)} icon={ faMotorcycle } size={38} style={{color:Colors.white_color}} />                    
                    :
                        <FontAwesomeIcon onPress={()=> setVisible(false)} icon={ faHome } size={38} style={{color:Colors.white_color}} />                    
                    }
                </View>
            </View>
        </View>
   
    )
}

export function ProductCard({title, description, employer, delivery, width, height, preco, source}) {

    return(
        <View style={{width: width, height:height, backgroundColor:'white', zIndex:-1, borderBottomWidth:1,display: 'flex', flexDirection:'row', padding:10, borderColor:Colors.border_opaque}}>
            <View style={{width:'70%', height:'100%', display: 'flex', justifyContent:'space-between'}}>
                <View>
                    <Text style={{fontSize:fonts.f19px}}>{title}</Text>
                    <Text style={{fontSize:fonts.f15px, color:Colors.text_opaque}}>{description}</Text>
                </View>
                <View>
                    <Text style={{fontSize:fonts.f15px, color:Colors.white_color, borderRadius:2, elevation:5, backgroundColor:Colors.green_dark, width:90, textAlign:'center'}}>
                        R$:{preco}
                    </Text>
                </View>
            </View>
            <View style={{width:'30%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'flex-end'}}>
                    <ImageBackground
                    style={{width:100, height:100, position:'absolute', elevation:5, shadowColor:'black'}}
                    imageStyle={{borderRadius:5}}
                    source={source}>
                    </ImageBackground>
            </View>
        </View>
   
    )
}

export function GroupTitleCard({title, width, height }) {
    return(
        <View style={{width: width, height:height, backgroundColor:'white', zIndex:-1, borderBottomWidth:1,display: 'flex', flexDirection:'row', padding:10, borderColor:Colors.border_opaque}}>
            <Text style={{fontSize:fonts.f19px}}>{title}</Text>
        </View>
   
    )
}

export function InfoCard({title, value, width, height}){
    return(
        <View style={{width: width, height:height, zIndex:-1, borderBottomWidth:1,display: 'flex', flexDirection:'column', padding:10, borderColor:Colors.border_opaque}}>
            <Text style={{fontSize:fonts.f19px}}>{title}</Text>
            <Text style={{fontSize:fonts.f15px, marginTop:10, color: Colors.text_opaque}}>{value}</Text>
        </View>
   
    )
}

export function StablishmentCard({title, value, width, height}){
    return(
        <View style={{width: width, height:height, zIndex:-1, borderBottomWidth:1,display: 'flex', flexDirection:'column', padding:10, borderColor:Colors.border_opaque}}>
            <FontAwesomeIcon icon={ faTimes } size={24} style={{color:Colors.red_opaque, position:'absolute', right:0, top:10}} />                    
            <Text style={{fontSize:fonts.f19px}}>{title}</Text>
            <Text style={{fontSize:fonts.f15px, marginTop:10, color: Colors.text_opaque}}>{value}</Text>
        </View>
   
    )
}

export function StablishmentCardChoose({title, value, width, height,status}){
    if(status == "Aberto"){
    return(
        <View style={{width: width, height:height, zIndex:-1, borderBottomWidth:1,display: 'flex', flexDirection:'column', padding:10, borderColor:Colors.border_opaque}}>
            <Text style={{textAlign:'center',backgroundColor:Colors.main_color, width:70, color:Colors.white_color, position:'absolute', right:10, top:30, padding:5, borderRadius:2}}>{status}</Text>                    
            <Text style={{fontSize:fonts.f19px}}>{title}</Text>
            <Text style={{fontSize:fonts.f15px, marginTop:10, color: Colors.text_opaque}}>{value}</Text>
        </View>
   
    )}
    else{
        return(
            <View style={{width: width, height:height, zIndex:-1, borderBottomWidth:1,display: 'flex', flexDirection:'column', padding:10, borderColor:Colors.border_opaque}}>
                <Text style={{textAlign:'center', width:70, backgroundColor:Colors.red_violet, color:Colors.white_color, position:'absolute', right:10, top:30, padding:5, borderRadius:2}}>{status}</Text>                    
                <Text style={{fontSize:fonts.f19px}}>{title}</Text>
                <Text style={{fontSize:fonts.f15px, marginTop:10, color: Colors.text_opaque}}>{value}</Text>
            </View>
       
        )
    }
}

const styles = StyleSheet.create({
 
});