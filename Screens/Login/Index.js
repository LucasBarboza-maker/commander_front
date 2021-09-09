import * as React from 'react';
import Utils from '../../assets/Utils/colors.json';
import fonts from '../../assets/Utils/fontSizes.json';
import {StyleSheet, View, Text } from 'react-native';
import CommanderIcon from "../../components/SVGComponents/CommanderIcon.js";
import BrandButton from '../../components/Inputs/Buttons/brandButton.js';
import Button from '../../components/Inputs/Buttons/buttons.js';
import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import {BasicTextInput, PasswordTextInput} from '../../components/Inputs/Text/InputText';


export default function Login({navigation}) {
  return (
    <View style={{display: 'flex', alignItems: 'center'}}>
        <GlobalStatusBar/>
        <View style={{display:'flex', width:'100%',height:'95%', alignItems: 'center', justifyContent: 'space-between', paddingTop:10, paddingBottom:10, paddingLeft:34, paddingRight:34}}>
          <View style={{...styles.container, height:150, marginBottom:50}}>
            <CommanderIcon/>
          </View>
          <View style={{width: '100%', height:'auto', justifyContent: 'center', alignItems: 'center'}}>
            <BrandButton width='100%' height={50} text={"Acesse pelo Google    "} brandName="google"/>
            <BrandButton width='100%' height={50} text={"Acesse pelo Facebook"} brandName="facebook" UpperMarginQTD={17}/>
          </View>
          <View style={{display: 'flex', width:'100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{width: '45%', height:1, backgroundColor:Utils.border_opaque}}></View>
            <Text style={{color:Utils.text_opaque, fontSize:fonts.f18px}}>or</Text>
            <View style={{width: '45%', height:1, backgroundColor:Utils.border_opaque}}></View>
          </View>
          <View style={{width: '100%', height:'auto', justifyContent: 'center', alignItems: 'center'}}>
            <BasicTextInput placeHolder="Email" height={50} width='100%'/>
            <PasswordTextInput placeHolder="Senha" height={50} width='100%'/>
            <Button color={Utils.white_color} bgColor={Utils.main_color} width='100%' height={50} text={"Entrar"} routeName="Main" navigation={navigation} UpperMarginQTD={17}/>
            <Text onPress={() => console.log("Esqueceu o Login tela")}  style={{textDecorationLine:'underline', fontWeight:'bold',color:Utils.text_opaque, fontSize:fonts.f18px}}>Esqueceu o Login?</Text>
          </View>
            <Text onPress={() => navigation.navigate('SignUp')} style={{textDecorationLine:'underline', fontWeight:'bold',color:Utils.text_opaque, fontSize:fonts.f18px}}>Não tem uma conta? Registre-se</Text>
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

