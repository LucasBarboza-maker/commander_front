import * as React from 'react';
import { Text, View, Pressable, ScrollView} from 'react-native';

import Utils from '../../assets/Utils/colors.json';
import Fonts from '../../assets/Utils/fontSizes.json';
import { BackButtonWhite } from '../../components/Inputs/Buttons/backButton.js';

import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import {ProductCardMenu, GroupTitleCard} from '../../components/Cards/Cards.js';
import {FilterProducts} from '../../components/Filter/Filter.js';


export default function Products({navigation}) {
  return (
    <>
    <GlobalStatusBar/>
        <View style={{backgroundColor:Utils.main_color, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width:'100%', paddingLeft: 10, paddingRight: 10}}>
            <BackButtonWhite color={Utils.white_color} width={75} navigation={navigation} />
       </View>
       <View style={{display:'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:Utils.main_color, padding:25, minHeight:80}}>
        <FilterProducts width="100%" height={45}/>
      </View>
      <ScrollView style={{zIndex:-10}}>
        <ProductCardMenu navigation={navigation} width="100%" height={120} title="Hamburguer" description="Sanduiche com carne e vegetais, molho de alho." preco={"16,50"} source={require("../../assets/myImages/ProductImages/Hamburguer.webp")}/>
        <ProductCardMenu width="100%" height={120} title="X-Bacon" description="Sanduiche com carne, queijo, salada e bacon." preco={"18,50"} source={require("../../assets/myImages/ProductImages/XBacon.jpg")}/>
        <ProductCardMenu width="100%" height={120} title="X-Tudo" description="Sanduiche com duas carnes, dois queijos, salada, molho, bacon...." preco={"22,50"} source={require("../../assets/myImages/ProductImages/XTudo.webp")}/>
        <GroupTitleCard title= "Porções"/>
        <ProductCardMenu width="100%" height={120} title="Porção de Batata" description="Porção de batata com 200gr" preco={"10,00"} source={require("../../assets/myImages/ProductImages/Batata.jpg")}/>
        <ProductCardMenu width="100%" height={120} title="Polenta" description="Porção de polenta frita." preco={"12,00"} source={require("../../assets/myImages/ProductImages/Polenta.jpg")}/>
        <GroupTitleCard title= "Bebidas"/>
        <ProductCardMenu width="100%" height={120} title="Pina Colada" description="Bebida alcoolica de abacaxi com coco." preco={"16,00"} source={require("../../assets/myImages/ProductImages/Bebida.webp")}/>
      </ScrollView>

    </>
  );
}