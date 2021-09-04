import * as React from 'react';
import Utils from '../../assets/Utils/colors.json';
import fonts from '../../assets/Utils/fontSizes.json';
import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import {StyleSheet, View, Text, StatusBar, Pressable } from 'react-native';
import CommanderIcon from "../../components/SVGComponents/commanderIcon.js";
import BrandButton from '../../components/Inputs/Buttons/brandButton.js';
import Button from '../../components/Inputs/Buttons/buttons.js';
import {BackButtonAbsolute} from '../../components/Inputs/Buttons/backButton.js';

import {BasicTextInput, PasswordTextInput} from '../../components/Inputs/Text/InputText';


export default function SignUp({navigation}) {
  return (
    <View style={{display: 'flex', alignItems: 'center'}}>
            <View style={{height:StatusBar.currentHeight, backgroundColor:Utils.main_color, width:'100%'}}>
                <ExpoStatusBar style="light"></ExpoStatusBar>
            </View>
        
            <View style={{display:'flex', width:'100%',height:'95%', alignItems: 'center', justifyContent: 'space-between', paddingTop:10, paddingBottom:10, paddingLeft:34, paddingRight:34}}>
                <View style={{width:'100%', height:'20%', justifyContent: 'space-between'}}>
                    <View>
                        <BackButtonAbsolute width={75} PageName="Login" navigation={navigation}/>
                    </View>
                    <View>
                        <Text style={{fontSize:fonts.f36px, fontWeight:'bold', color:Utils.main_color}}>Registre-se</Text>
                        <Text style={{fontSize:fonts.f20px, color:Utils.text_opaque, marginTop:10}}>Registre-se para acessar</Text>
                    </View>
                </View>
                <View style={{width: '100%', height:'auto', justifyContent: 'center', alignItems: 'center'}}>
                    <BasicTextInput placeHolder="Nome" height={50} width='100%'/>
                    <BasicTextInput placeHolder="Sobrenome" height={50} width='100%'/>
                    <BasicTextInput placeHolder="Email" height={50} width='100%'/>
                    <PasswordTextInput placeHolder="Senha" height={50} width='100%'/>
                    <PasswordTextInput placeHolder="Confirmar Senha" height={50} width='100%'/>
                    <Text style={{textDecorationLine:'underline', fontWeight:'bold',color:Utils.text_opaque, fontSize:fonts.f18px}}>Você aceita os termos?</Text>
                </View>
                <Button width='100%' height={50} text={"Registrar"} paddingLeftValue={34} paddingRightValue={34} UpperMarginQTD={17}/>
            </View>
    </View>
  ); 

  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      width: '100%',
      alignItems: "center",
    },
  });

