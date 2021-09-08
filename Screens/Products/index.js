import * as React from 'react';
import { Text, View, Pressable, ScrollView} from 'react-native';

import Utils from '../../assets/Utils/colors.json';
import Fonts from '../../assets/Utils/fontSizes.json';

import CommanderIconSvg from '../../components/SVGComponents/CommanderIconWhite';
import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import {TableCard, ProductCard, GroupTitleCard} from '../../components/Cards/Cards.js';
import {FilterInputText} from '../../components/Inputs/Text/InputText.js';


export default function Products() {
  return (
    <>
    <GlobalStatusBar/>
      <View style={{display:'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:Utils.main_color, padding:25}}>
        <FilterInputText width="100%" height={45}/>
      </View>
      <ScrollView style={{zIndex:-10}}>
        <ProductCard width="100%" height={120} title="Hamburguer" description="Sanduiche com carne e vegetais, molho de alho." preco={"16,50"} source={require("../../assets/myImages/ProductImages/Hamburguer.webp")}/>
        <ProductCard width="100%" height={120} title="X-Bacon" description="Sanduiche com carne, queijo, salada e bacon." preco={"18,50"} source={require("../../assets/myImages/ProductImages/XBacon.jpg")}/>
        <ProductCard width="100%" height={120} title="X-Tudo" description="Sanduiche com duas carnes, dois queijos, salada, molho, bacon...." preco={"22,50"} source={require("../../assets/myImages/ProductImages/XTudo.webp")}/>
        <GroupTitleCard title= "Porções"/>
        <ProductCard width="100%" height={120} title="Porção de Batata" description="Porção de batata com 200gr" preco={"10,00"} source={require("../../assets/myImages/ProductImages/Batata.jpg")}/>
        <ProductCard width="100%" height={120} title="Polenta" description="Porção de polenta frita." preco={"12,00"} source={require("../../assets/myImages/ProductImages/Polenta.jpg")}/>
        <GroupTitleCard title= "Bebidas"/>
        <ProductCard width="100%" height={120} title="Pina Colada" description="Bebida alcoolica de abacaxi com coco." preco={"16,00"} source={require("../../assets/myImages/ProductImages/Bebida.webp")}/>
      </ScrollView>

    </>
  );
}