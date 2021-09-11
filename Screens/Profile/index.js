import * as React from 'react';
import { Text, View, Pressable } from 'react-native';
import Utils from '../../assets/Utils/colors.json'
import Fonts from '../../assets/Utils/fontSizes.json'


import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import CommanderIconSvg from '../../components/SVGComponents/CommanderIconWhite';
import {ProfilePhoto} from '../../components/Profile/ProfilePhoto.js';
import {InfoCard, StablishmentCard} from '../../components/Cards/Cards.js'

export default function Profile({navigation}) {
  return (
    <>
    <GlobalStatusBar/>
      <View style={{paddingTop:10, height: '30%', width: '100%', justifyContent: 'flex-start',  alignItems: 'center', backgroundColor: Utils.main_color, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
        <ProfilePhoto height={150} width={'100%'} image={require('../../assets/myImages/PerfilImage/Imagem_perfil.jpg')}/>
      </View>
      <View style={{width: '100%', paddingLeft:20, paddingRight:20, paddingTop:15}}>
        <Text style={{fontSize:Fonts.f18px, color:Utils.color_base}}>Estabelecimentos</Text>
        <View style={{width: '100%', height:204, elevation:5, backgroundColor:Utils.white_color, overflow: 'hidden'}}>
          <StablishmentCard title="Hamburgueria" value="Est. União Industria, Corrêas, 300"/>
          <StablishmentCard title="Hamburgueria" value="Est. União Industria, Corrêas, 300"/>
          <StablishmentCard title="Hamburgueria" value="Est. União Industria, Corrêas, 300"/>
          <StablishmentCard title="Hamburgueria" value="Est. União Industria, Corrêas, 300"/>

        </View>
      </View>
      <InfoCard title="Nome" value="Lucas Rodrigues Barboza"></InfoCard>
      <InfoCard title="Email" value="Lucasrb18@gmail.com"></InfoCard>
      <InfoCard title="Telefone" value="(24)99301-7636"></InfoCard>

    </>
  );
}