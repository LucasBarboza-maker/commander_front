import * as React from 'react';
import { Text, View, Pressable } from 'react-native';
import Utils from '../../assets/Utils/colors.json'
import Fonts from '../../assets/Utils/fontSizes.json'


import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import CommanderIconSvg from '../../components/SVGComponents/CommanderIconWhite';
import {ImageButtonManageStablishment, ImageButtonPrinter, ImageButtonOrder} from '../../components/Inputs/Buttons/ImageButton.js';



export default function Home({navigation}) {
  return (
    <>
    <GlobalStatusBar/>
      <View style={{paddingTop:10, height: '30%', width: '100%', justifyContent: 'flex-start',  alignItems: 'center', backgroundColor: Utils.main_color, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
        <CommanderIconSvg/>
        <Pressable onPress={() => navigation.navigate('Login')}style={{elevation:5, backgroundColor:Utils.green_dark, width:'80%', padding:10, borderRadius:5}}>
          <Text style={{fontSize:Fonts.f18px, fontWeight:'bold', width:'100%', textAlign: 'center', color:Utils.white_color}}>Começar Expediente</Text>
        </Pressable>
      </View>
      <View style={{height: '60%', width: '100%', justifyContent: 'flex-start',  alignItems: 'center', paddingLeft:23, paddingRight:23}}>
        <ImageButtonManageStablishment width="100%" height="30%" text="Gerenciar Restaurantes" resizeMode='stretch' navigation={navigation} afterPage={'ManageEstablishment'}/>
        <ImageButtonPrinter width="100%" height="30%" text="Configurar Impressora" resizeMode='stretch' navigation={navigation}/>
        <ImageButtonOrder width="100%" height="30%" text="Comandar Pedido" resizeMode='stretch'/>
      </View>
    </>
  );
}