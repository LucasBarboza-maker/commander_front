import * as React from 'react';
import {useState} from 'react';
import { Text, View, Pressable, ScrollView, Button} from 'react-native';

import Utils from '../../assets/Utils/colors.json';
import Fonts from '../../assets/Utils/fontSizes.json';

import { BackButtonWhite } from '../../components/Inputs/Buttons/backButton.js';
import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import {SelectProductCard, GroupTitleCard} from '../../components/Cards/Cards.js';
import {FilterProducts} from '../../components/Filter/Filter.js';
import {GhostButton} from '../../components/Inputs/Buttons/buttons.js'


export default function OrderProducts({navigation}) {

  const[products, setProducts] = useState([]);
  const[productsObservations, setProductsObservations] = useState([]);

  return (
    <>
    <GlobalStatusBar/>
      <View style={{backgroundColor: Utils.main_color, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width:'100%', paddingLeft: 10, paddingRight: 10}}>
        <BackButtonWhite color={Utils.white_color} width={75} navigation={navigation} />
      </View>
      <Text style={{ textAlign: 'center', width: '100%', color:Utils.white_color, backgroundColor: Utils.main_color, fontSize:Fonts.f23px, fontWeight:'bold'}}>Comandar</Text>
      <View style={{display:'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:Utils.main_color, padding:25}}>
        <FilterProducts width="100%" height={45}/>
      </View>
   
      <ScrollView style={{zIndex:-10}}>
        <SelectProductCard width="100%" height={120} title="Hamburguer" description="Sanduiche com carne e vegetais, molho de alho." preco={"16,50"} source={require("../../assets/myImages/ProductImages/Hamburguer.webp")} values={products} setValues={setProducts}/>
        <SelectProductCard width="100%" height={120} title="X-Bacon" description="Sanduiche com carne, queijo, salada e bacon." preco={"18,50"} source={require("../../assets/myImages/ProductImages/XBacon.jpg")} values={products} setValues={setProducts}/>
        <SelectProductCard width="100%" height={120} title="X-Tudo" description="Sanduiche com duas carnes, dois queijos, salada, molho, bacon...." preco={"22,50"} source={require("../../assets/myImages/ProductImages/XTudo.webp")} values={products} setValues={setProducts}/>
        <GroupTitleCard title= "Porções"/>
        <SelectProductCard width="100%" height={120} title="Porção de Batata" description="Porção de batata com 200gr" preco={"10,00"} source={require("../../assets/myImages/ProductImages/Batata.jpg")} values={products} setValues={setProducts}/>
        <SelectProductCard width="100%" height={120} title="Polenta" description="Porção de polenta frita." preco={"12,00"} source={require("../../assets/myImages/ProductImages/Polenta.jpg")} values={products} setValues={setProducts}/>
        <GroupTitleCard title= "Bebidas"/>
        <SelectProductCard width="100%" height={120} title="Pina Colada" description="Bebida alcoolica de abacaxi com coco." preco={"16,00"} source={require("../../assets/myImages/ProductImages/Bebida.webp")} values={products} setValues={setProducts}/>
      </ScrollView>
      <View style={{paddingLeft:20, paddingRight:20, paddingTop:10, backgroundColor:Utils.white_color}}>
        <GhostButton  height={50} text="Comandar" borderColor={Utils.main_color} color={Utils.main_color} navigation={navigation} routeName="ComandarProdutos" borderRadius={10}/>
      </View>
    </>
  );
}