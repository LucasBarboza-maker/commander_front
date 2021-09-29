import * as React from 'react';
import { Text, View, Pressable } from 'react-native';
import Utils from '../../assets/Utils/colors.json'
import Fonts from '../../assets/Utils/fontSizes.json'



import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import CommanderIconSvg from '../../components/SVGComponents/CommanderIconWhite';
import { ImageButtonManageStablishment, ImageButtonPrinter, ImageButtonOrder } from '../../components/Inputs/Buttons/ImageButton.js';
import { BackButtonWhite } from '../../components/Inputs/Buttons/backButton.js';
import Button from '../../components/Inputs/Buttons/buttons.js'



export default function ManageEstablishment({ navigation, route}) {
  const {establishmentName} = route.params;
  
  
  return (
    <>
      <GlobalStatusBar />
      <View style={{ paddingTop: 10, height: '15%', width: '100%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Utils.main_color, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingLeft: 10, paddingRight: 10 }}>
          <BackButtonWhite color={Utils.white_color} width={75} navigation={navigation} />
        </View>
        <View>
          <Text style={{fontSize:Fonts.f23px, color:Utils.white_color, marginTop:33, fontWeight: 'bold'}}>{establishmentName}</Text>

        </View>
      </View>



      <View style={{ height: '60%', width: '100%', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 23, paddingRight: 23 }}>
       
        <ImageButtonPrinter width="100%" height="30%" text="Histórico de Vendas" resizeMode='stretch' />
        <ImageButtonManageStablishment width="100%" height="30%" text="Editar Restaurante" resizeMode='stretch'/>
        <ImageButtonOrder width="100%" height="30%" text="Gerencia Funcionários" resizeMode='stretch' />
        <ImageButtonOrder width="100%" height="30%" text="Alterar Cardápio" resizeMode='stretch' />
      </View>
    </>
  );
}