import * as React from 'react';
import { Text, View, Pressable,ScrollView} from 'react-native';
import Utils from '../../assets/Utils/colors.json'
import Fonts from '../../assets/Utils/fontSizes.json'


import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import CommanderIconSvg from '../../components/SVGComponents/CommanderIconWhite';
import {EllipseImage} from '../../components/Header/EllipseImage';
import {InfoCard, StablishmentCard} from '../../components/Cards/Cards.js';
import { BackButtonWhite } from '../../components/Inputs/Buttons/backButton.js';

export default function Profile({navigation}) {
  return (
    <>
    <GlobalStatusBar/>
      <View style={{paddingTop:10, height:300, width: '100%', justifyContent: 'flex-start',  alignItems: 'center', backgroundColor: Utils.main_color, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width:'100%', paddingLeft: 10, paddingRight: 10}}>
            <BackButtonWhite color={Utils.white_color} width={75} navigation={navigation} />
        </View>
        <EllipseImage height={150} width={'100%'} image={require("../../assets/myImages/ProductImages/Hamburguer.webp")}/>
        <View style={{backgroundColor:Utils.green_dark, width:'80%', elevation:5, padding:5}}>
            <Text style={{fontSize:Fonts.f23px, color:Utils.white_color, fontWeight:"bold", textAlign:'center'}}>Hamburguer</Text>
        </View>
      </View>
      <ScrollView>
        <InfoCard title="Nome" value="Hamburguer"></InfoCard>
        <InfoCard title="Preço" value="R$:16,00"></InfoCard>

        <InfoCard title="Grupo" value="Sanduiche"></InfoCard>
        <InfoCard title="Descrição" value="Sanduiche com carne e vegetais, molho de alho."></InfoCard>
      </ScrollView>

    </>
  );
}