import * as React from 'react';
import {useState,useCallback} from 'react';
import { Text, View, Pressable, ScrollView, Button} from 'react-native';
import Utils from '../../assets/Utils/colors.json'
import Fonts from '../../assets/Utils/fontSizes.json'

import { BackButtonWhite } from '../../components/Inputs/Buttons/backButton.js';
import {GhostButton} from '../../components/Inputs/Buttons/buttons.js'
import { EllipseImage } from '../../components/Header/EllipseImage.js';
import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import {BasicNumberInputPlaceHolderKeep, BasicComboBoxInput, TextAreaInputPlaceHolderKeep, MaskedTextInputPlaceHolderKeep, BasicTextInputPlaceHolderKeep} from '../../components/Inputs/Text/InputText.js';

export default function Comandar({navigation}) {

  const [orderNumberValue, setOrderNumberValue] = useState(0);
  const [deliveryComboValue, setdeliveryComboValue] = useState("Mesa");
  const [observationValue, setObservationValue] = useState("");
  const [telephoneValue, setTelephoneValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [neighbourhoodValue, setNeighbourhoodValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [referenceValue, setReferenceValue] = useState("");


  return (
    <>
    <GlobalStatusBar/>
    <View style={{paddingTop:10, paddingBottom:10, height: 'auto', width: '100%', justifyContent: 'flex-start',  alignItems: 'center', backgroundColor: Utils.main_color, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width:'100%', paddingLeft: 10, paddingRight: 10}}>
            <BackButtonWhite color={Utils.white_color} width={75} navigation={navigation} />
        </View>
        <Text style={{fontSize:Fonts.f23px, color:Utils.white_color, fontWeight:'bold'}}>{"Comandar N°"+orderNumberValue}</Text>
    </View>
    <ScrollView decelerationRate={'normal'} style={{zIndex:1000}} keyboardShouldPersistTaps="always" style={{flex:1}} > 
        <View style={{ display: 'flex', justifyContent: 'space-between'}}>
            
                <BasicNumberInputPlaceHolderKeep placeHolder="Número" placeHolderExample="0" value={orderNumberValue} setValue={setOrderNumberValue}/>
                <BasicComboBoxInput value={deliveryComboValue} possibilities={["Mesa", "Delivery"]} placeHolder="Tipo" setValue={setdeliveryComboValue}/>
               
                {deliveryComboValue == "Mesa" ? 
                 <>
                    <View style={{paddingLeft:20}}>
                        <Text style={{fontSize:Fonts.f19px, color:Utils.text_opaque}}>Observação da Mesa:</Text>
                    </View>
                    <BasicTextInputPlaceHolderKeep placeHolder="Nome" placeHolderExample="Digite o Nome" keyboardType="default" value={neighbourhoodValue} setValue={setNeighbourhoodValue}/>
                    <TextAreaInputPlaceHolderKeep value={observationValue} placeHolder="Ex: A mesa se localiza perto da entrada" setValue={setObservationValue}/>
                </>
                :
                <>
                    <BasicTextInputPlaceHolderKeep placeHolder="Nome" placeHolderExample="Digite o Nome" keyboardType="default" value={neighbourhoodValue} setValue={setNeighbourhoodValue} mask='AAA'/>
                    <MaskedTextInputPlaceHolderKeep placeHolder="Telefone" placeHolderExample="(99)99999-9999" keyboardType="numeric" value={telephoneValue} setValue={setTelephoneValue} mask='(99)99999-9999'/>
                    <BasicTextInputPlaceHolderKeep placeHolder="Estado" placeHolderExample="Digite o Estado" keyboardType="default" value={referenceValue} setValue={setReferenceValue}/>
                    <BasicTextInputPlaceHolderKeep placeHolder="Cidade" placeHolderExample="Digite a Cidade" keyboardType="default" value={cityValue} setValue={setCityValue}/>
                    <BasicTextInputPlaceHolderKeep placeHolder="Bairro" placeHolderExample="Digite o Bairro" keyboardType="default" value={neighbourhoodValue} setValue={setNeighbourhoodValue}/>
                    <BasicTextInputPlaceHolderKeep placeHolder="Número" placeHolderExample="Digite o Número" keyboardType="numeric" value={numberValue} setValue={setNumberValue}/>
                    <BasicTextInputPlaceHolderKeep placeHolder="Referência" placeHolderExample="Digite um Ponto" keyboardType="default" value={referenceValue} setValue={setReferenceValue}/>
                </>
                }
        </View>
       
    </ScrollView>
    <View style={{paddingLeft:20, paddingRight:20, marginBottom:10}}>
            <GhostButton onPress={() => {console.log("T1: "+orderNumberValue); }} height={50} text="Comandar" borderColor={Utils.main_color} color={Utils.main_color} navigation={navigation} routeName="ComandarProdutos" borderRadius={10}/>
    </View>
    </>
  );
}