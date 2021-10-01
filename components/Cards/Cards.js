import * as React from 'react';
import {useState} from 'react';
import Colors from '../../assets/Utils/colors.json';
import fonts from '../../assets/Utils/fontSizes.json';
import {View, StyleSheet, Pressable, Text, ImageBackground, TextInput} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faHome, faCheck,  faTimes, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import {faMotorcycle} from '@fortawesome/free-solid-svg-icons';

export function TableCard({title, description, employer, delivery, width, height, navigation}) {

    const[visible, setVisible] = useState(true);
    return(
        <Pressable onPress={() => navigation.navigate("TableDetails", {delivery:delivery})} style={{width: width, height:height, backgroundColor:'white', zIndex:-1, borderBottomWidth:1,display: 'flex', flexDirection:'row', padding:10, borderColor:Colors.border_opaque}}>
            <View style={{width:'70%', height:'100%', display: 'flex', justifyContent:'space-between'}}>
                <View>
                    <Text style={{fontSize:fonts.f19px}}>{title}</Text>
                    <Text style={{fontSize:fonts.f15px, color:Colors.text_opaque}}>{description}</Text>
                </View>
                <View>
                    <Text style={{fontSize:fonts.f15px, color:Colors.white_color, borderRadius:2, elevation:5, backgroundColor:Colors.green_dark, width:100, textAlign:'center'}}>
                        {employer}
                    </Text>
                </View>
            </View>
            <View style={{width:'30%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'flex-end'}}>
                <View style={{backgroundColor:Colors.green_dark, borderRadius:5, padding:5}}>
                    {delivery? 
                        <FontAwesomeIcon onPress={()=> setVisible(false)} icon={ faMotorcycle } size={38} style={{color:Colors.white_color}} />                    
                    :
                        <FontAwesomeIcon onPress={()=> setVisible(false)} icon={ faHome } size={38} style={{color:Colors.white_color}} />                    
                    }
                </View>
            </View>
        </Pressable>
   
    )
}

export function ProductCard({title, description, employer, delivery, width, height, preco, source, navigation}) {

    return(
        <Pressable onPress={() => navigation.navigate("ProductDetails",{id:1})} style={{width: width, height:height, backgroundColor:'white', zIndex:-1, borderBottomWidth:1,display: 'flex', flexDirection:'row', padding:10, borderColor:Colors.border_opaque}}>
            <View style={{width:'70%', height:'100%', display: 'flex', justifyContent:'space-between'}}>
                <View>
                    <Text style={{fontSize:fonts.f19px}}>{title}</Text>
                    <Text style={{fontSize:fonts.f15px, color:Colors.text_opaque}}>{description}</Text>
                </View>
                <View>
                    <Text style={{fontSize:fonts.f15px, color:Colors.white_color, borderRadius:2, elevation:5, backgroundColor:Colors.green_dark, width:100, textAlign:'center'}}>
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
        </Pressable>
   
    )
}

export function SelectProductCard({title, description, employer, delivery, width, height, preco, source, values, setValues}) {

    const[quantity, setQuantity] = useState(0);
    const[observation, setObservation] = useState("");

    return(
        <>
        <View style={{width: width, height:height, backgroundColor:'white', zIndex:-1, borderBottomWidth:1,display: 'flex', flexDirection:'row', padding:10, borderColor:Colors.border_opaque}}>
            <View style={{width:'70%', height:'100%', display: 'flex', justifyContent:'space-between'}}>
                <View>
                    <Text style={{fontSize:fonts.f19px}}>{title}</Text>
                    <Text style={{fontSize:fonts.f15px, color:Colors.text_opaque}}>{description}</Text>
                </View>
                <View>
                    <Text style={{fontSize:fonts.f15px, color:Colors.white_color, borderRadius:2, elevation:5, backgroundColor:Colors.green_dark, width:100, textAlign:'center'}}>
                        R$:{preco}
                    </Text>
                </View>
            </View>
            <View style={{width:'30%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'flex-end',zIndex:-1}}>
                    <ImageBackground
                    style={{width:100, height:100, position:'absolute', elevation:5, shadowColor:'black'}}
                    imageStyle={{borderRadius:5}}
                    source={source}>
                    </ImageBackground>
            </View>
            <View style={{zIndex:1000, borderBottomEndRadius:5, borderBottomLeftRadius:5, display:'flex', flexDirection:'row', alignItems: 'center', justifyContent:'space-around', backgroundColor:Colors.green_dark, width:100, height:30, right:10, bottom:9,position:'absolute'}}>
                <Pressable onPress={() => {removeProductOfList(values, setValues, title, quantity); if(quantity-1 >= 0)setQuantity(quantity-1)}} style={{width:25, height:25, alignItems: 'center',display:'flex',justifyContent: 'center'}}>
                    <FontAwesomeIcon  icon={ faMinus } size={18} style={{color:Colors.white_color}} />
                </Pressable>
                <Text style={{color:Colors.white_color,fontSize:fonts.f18px}}>{quantity}</Text>
                <Pressable  onPress={() => {setQuantity(quantity+1); addProductToList(values, setValues, title, preco, quantity+1);}} style={{width:25, height:25, alignItems: 'center',display:'flex',justifyContent: 'center'}}>                    
                    <FontAwesomeIcon icon={ faPlus } size={18} style={{color:Colors.white_color}} />                    
                </Pressable>
            </View>
        </View>
        { quantity > 0? 
            <View style={{width:'100%', height:50, padding:10, display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
                <TextInput
                multiline={true}
                onChangeText={(e) => addObservation(values, e, title)}
                placeholder="Alguma Observação?"
                style={{backgroundColor:'white', width:'100%', height:40, borderRadius:5, borderWidth:1, borderColor:Colors.border_opaque, padding:10}}></TextInput>
            </View>
        :
            <></>
        }
        </>
    )
}

export function SelectOrderProductCard({title, description, employer, delivery, width, height, preco, source, values, setValues, quantityFromOrder, observation}) {
    const[quantity, setQuantity] = useState(quantityFromOrder);

    return(
        <>
        <View style={{width: width, height:height, backgroundColor:'white', zIndex:-1, borderBottomWidth:1,display: 'flex', flexDirection:'row', padding:10, borderColor:Colors.border_opaque}}>
            <View style={{width:'70%', height:'100%', display: 'flex', justifyContent:'space-between'}}>
                <View>
                    <Text style={{fontSize:fonts.f19px}}>{title}</Text>
                    <Text style={{fontSize:fonts.f15px, color:Colors.text_opaque}}>{description}</Text>
                </View>
                <View>
                    <Text style={{fontSize:fonts.f15px, color:Colors.white_color, borderRadius:2, elevation:5, backgroundColor:Colors.green_dark, width:100, textAlign:'center'}}>
                        R$:{preco}
                    </Text>
                </View>
            </View>
            <View style={{width:'30%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'flex-end',zIndex:-1}}>
                    <ImageBackground
                    style={{width:100, height:100, position:'absolute', elevation:5, shadowColor:'black'}}
                    imageStyle={{borderRadius:5}}
                    source={source}>
                    </ImageBackground>
            </View>
            <View style={{zIndex:1000, borderBottomEndRadius:5, borderBottomLeftRadius:5, display:'flex', flexDirection:'row', alignItems: 'center', justifyContent:'space-around', backgroundColor:Colors.green_dark, width:100, height:30, right:10, bottom:9,position:'absolute'}}>
            
                <Text style={{color:Colors.white_color,fontSize:fonts.f18px}}>{quantityFromOrder}</Text>
    
            </View>
        </View>
        { quantity > 0? 
            <View style={{width:'100%', height:50, padding:10, display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
                <TextInput
                multiline={true}
                placeholder="Sem Observação"
                value={observation}
                style={{backgroundColor:'white', width:'100%', height:40, borderRadius:5, borderWidth:1, borderColor:Colors.border_opaque, padding:10}}></TextInput>
            </View>
        :
            <></>
        }
        </>
    )
}

export function StatisticCard({width, height, valor, legendaDoTotal}) {

    const[visible,setVisible] = useState(true);

    return(
        <>
            <View style={{marginTop:10, elevation:5, display:'flex', justifyContent: 'space-between', flexDirection:'column', width: width, height:height, backgroundColor:'white', zIndex:-1, borderBottomWidth:1,display: 'flex', padding:10, borderColor:Colors.border_opaque}}>
                    <View style={{display:'flex', width:'100%', justifyContent:'space-between', fontSize:fonts.f16px, alignItems: 'center', flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color:Colors.text_opaque}}>{legendaDoTotal}</Text>
    
                        {visible ?
                
                            <FontAwesomeIcon onPress={()=> setVisible(false)} icon={ faEye } size={32} style={{color:Colors.text_opaque}} />

                        :
                            <FontAwesomeIcon onPress={()=> setVisible(true)} icon={ faEyeSlash } size={32} style={{color:Colors.text_opaque}} />

                        }                
                    </View>
                <View style={{display:'flex', width:'100%', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    {visible ?
                        <Text style={{color:Colors.green_dark, fontSize:fonts.f23px}}>{"R$ "+valor}</Text>
                    :
                        <Text style={{backgroundColor:Colors.green_opaque, color:Colors.green_opaque,fontSize:fonts.f20px}}>You shouldn't see that</Text>
                    }
                    <Text style={{fontSize:fonts.f16px, color:Colors.text_opaque}}>Ver Detalhes</Text>
                </View>
            </View>
        </>
    )
}

export function AllStatisticsCard({width, height, valor, legendaDoTotal, navigation}) {

    const[visible,setVisible] = useState(true);

    return(
        <>
            <Pressable onPress={() => navigation.navigate("StatisticsDetails")} style={{marginTop:10, elevation:5, display:'flex', justifyContent: 'space-between', flexDirection:'column', width: width, height:height, backgroundColor:'white', zIndex:-1, borderBottomWidth:1,display: 'flex', padding:10, borderColor:Colors.border_opaque}}>
                    <View style={{display:'flex', width:'100%', justifyContent:'space-between', fontSize:fonts.f16px, alignItems: 'center', flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color:Colors.text_opaque}}>{legendaDoTotal}</Text>             
                    </View>
                <View style={{display:'flex', width:'100%', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    {visible ?
                        <Text style={{color:Colors.green_dark, fontSize:fonts.f23px}}>{valor}</Text>
                    :
                        <Text style={{backgroundColor:Colors.green_opaque, color:Colors.green_opaque,fontSize:fonts.f20px}}>You shouldn't see that</Text>
                    }
                    <Text style={{fontSize:fonts.f16px, color:Colors.text_opaque}}>Ver Detalhes</Text>
                </View>
            </Pressable>
        </>
    )
}

function addObservation(values, observation, title){
    values.map(e => {
        if(e.name == title){
            e.observation = observation;
        }
    })
}


function addProductToList(values, setValues, title, preco, quantity){
    if(values.filter(e => {
        if(e.name == title){
            return e;
        }
    }).length <= 0){
        let array = [];
        array = values;
        array.push({name:title, preco:preco, quantidade:quantity});
        setValues(array);
        return;
    }

    values.map(e => {
        if(e.name == title){
            e.quantity = quantity;
        }
    })
}

function removeProductOfList(values, setValues, title, quantity){
    var array = [];
    array = values.filter(e => {
        if(e.name == title){
            if(quantity == 1){
                e.quantity = quantity-1;
            }
            if(quantity > 1){
                e.quantity = quantity-1;
                return e;
            }
        }else{
            return e;
        }         
    })
    console.log(array);
    setValues(array);
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

export function PressableInfoCard({title, value, width, height, navigation, screenName}){
    return(
        <Pressable onPress={() => navigation.navigate(screenName)} style={{width: width, height:height, zIndex:-1, borderBottomWidth:1,display: 'flex', flexDirection:'column', padding:10, borderColor:Colors.border_opaque}}>
            <Text style={{fontSize:fonts.f19px}}>{title}</Text>
            <Text style={{fontSize:fonts.f15px, marginTop:10, color: Colors.text_opaque}}>{value}</Text>
        </Pressable>
   
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

export function StablishmentCardChoose({title, value, width, height,status, navigation, afterPage}){
    if(status == "Aberto"){

    return(
        <Pressable onPress={() => navigation.navigate(afterPage,{establishmentName:'Hamburgueria'})} style={{width: width, height:height, zIndex:-1, borderBottomWidth:1,display: 'flex', flexDirection:'column', padding:10, borderColor:Colors.border_opaque}}>
            <Text style={{textAlign:'center',backgroundColor:Colors.main_color, width:70, color:Colors.white_color, position:'absolute', right:10, top:30, padding:5, borderRadius:2}}>{status}</Text>                    
            <Text style={{fontSize:fonts.f19px}}>{title}</Text>
            <Text style={{fontSize:fonts.f15px, marginTop:10, color: Colors.text_opaque}}>{value}</Text>
        </Pressable>
   
    )}
    else{
        return(
            <Pressable style={{width: width, height:height, zIndex:-1, borderBottomWidth:1,display: 'flex', flexDirection:'column', padding:10, borderColor:Colors.border_opaque}}>
                <Text style={{textAlign:'center', width:70, backgroundColor:Colors.red_violet, color:Colors.white_color, position:'absolute', right:10, top:30, padding:5, borderRadius:2}}>{status}</Text>                    
                <Text style={{fontSize:fonts.f19px}}>{title}</Text>
                <Text style={{fontSize:fonts.f15px, marginTop:10, color: Colors.text_opaque}}>{value}</Text>
            </Pressable>
       
        )
    }
}

const styles = StyleSheet.create({
 
});