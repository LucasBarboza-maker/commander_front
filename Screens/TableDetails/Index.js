import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, Pressable,ScrollView} from 'react-native';
import Utils from '../../assets/Utils/colors.json';
import Fonts from '../../assets/Utils/fontSizes.json';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPrint, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import {SelectOrderProductCard, GroupTitleCard} from '../../components/Cards/Cards.js';
import {InfoCard, StablishmentCard} from '../../components/Cards/Cards.js';
import { BackButtonWhite } from '../../components/Inputs/Buttons/backButton.js';
import {GhostButton} from '../../components/Inputs/Buttons/buttons.js';

export default function TableDetails({route, navigation}) {

  const { delivery } = route.params;
  const[products, setProducts] = useState([{name:'Hamburguer', price:16.50, quantity:2, description:"Sanduiche com carne e vegetais, molho de alho.", imageUrl:require("../../assets/myImages/ProductImages/Hamburguer.webp"), observation:""},{name:'Porção de Batata', price:10.00, quantity:1, description:"Sanduiche com carne e vegetais, molho de alho.", imageUrl:require("../../assets/myImages/ProductImages/Batata.jpg"), observation:"Sem Sal"}]);
  const[totalValue, setTotalValue] = useState("R$:");
  const[detailsVisible, setDetailsVisible] = useState(false);


  useEffect(() => {
    var value = (products.reduce((a, b) => {return{x: a.price*a.quantity + b.price*b.quantity}}));
    setTotalValue("R$: "+value.x);
  }, [])

  return (
    <>
    <GlobalStatusBar/>
      <View style={{paddingTop:10, height:130, width: '100%', justifyContent: 'flex-start',  alignItems: 'center', backgroundColor: Utils.main_color, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width:'100%', paddingLeft: 10, paddingRight: 10}}>
            <BackButtonWhite color={Utils.white_color} width={75} navigation={navigation} />
            <FontAwesomeIcon onPress={()=> console.log("IMPRIMIR")} icon={ faPrint } size={38} style={{color:Utils.white_color}} />                    
        </View>
        <Text style={{fontSize:Fonts.f23px, color:Utils.white_color, fontWeight:"bold", textAlign:'center'}}>Mesa 1</Text>
        <View style={{backgroundColor:Utils.green_dark, width:'80%', elevation:5, padding:5}}>
            <Text style={{fontSize:Fonts.f20px, color:Utils.white_color, textAlign:'center'}}>Total {totalValue}</Text>
        </View>
      </View>
      <ScrollView>
        <Pressable onPress={()=> setDetailsVisible(!detailsVisible)} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight:10, height:70, alignItems: 'center', borderBottomWidth:1, borderColor:Utils.border_opaque}}>
          <Text style={{fontSize:Fonts.f19px, color:Utils.text_opaque}}>Ver Detalhes</Text>
          <FontAwesomeIcon  icon={ faChevronDown } size={24} style={{color:Utils.text_opaque}} />                    
        </Pressable>
        {detailsVisible ? 
          <View>
            {delivery ?
            <>
              <InfoCard title="Nome" value="Lucas Rodrigues Barboza"></InfoCard>
              <InfoCard title="Cidade" value="Petrópolis"></InfoCard>
              <InfoCard title="Bairro" value="Corrêas"></InfoCard>
              <InfoCard title="Número" value="608"></InfoCard>
              <InfoCard title="Referência" value="Perto da Academia"></InfoCard>
              <InfoCard title="Telefone" value="(24)99301-7636"></InfoCard>
            </>
            :
            <>
              <InfoCard title="Observação" value="Mesa localizada perto da porta"></InfoCard>
            </>
          }
          </View>
          :
          <></>
        }
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', paddingLeft: 10, paddingRight:10, height:100, alignItems: 'center', borderBottomWidth:1, borderColor:Utils.border_opaque}}>
            <Text style={{fontSize:Fonts.f19px, color:Utils.text_opaque}}>Produtos</Text>
            <View style={{width:'100%', display: 'flex', flexDirection:'row', justifyContent: 'space-around'}}>
            <Pressable onPress={() => navigation.navigate(routeName)}  style={{borderWidth:1, borderColor:Utils.red_violet, width: 150, height:30, borderRadius:5, flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
              <Text style={{color:Utils.red_violet, fontSize:Fonts.f16px}}>Cancelar Pedido</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate(routeName)}  style={{borderWidth:1, borderColor:Utils.green_dark, width: 150, height:30, borderRadius:5, flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
              <Text style={{color:Utils.green_dark, fontSize:Fonts.f16px}}>Alterar Pedido</Text>
            </Pressable>
          </View>
        </View>
        {
          products.map((e,index) => {
            return <SelectOrderProductCard key={index} width="100%" height={120} title={e.name} description={e.description} preco={e.price} values={products} setValues={setProducts} quantityFromOrder={e.quantity} source={e.imageUrl} observation={e.observation}/>
          })
        }
      </ScrollView>
      <View style={{paddingLeft:20, paddingRight:20, marginBottom:10}}>
            <GhostButton onPress={() => {console.log("T1: "+orderNumberValue); }} height={50} text="Fechar" borderColor={Utils.main_color} color={Utils.main_color} navigation={navigation} routeName="FecharPedido" borderRadius={10}/>
      </View>
    </>
  );
}