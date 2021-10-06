import * as React from 'react';
import {useState,useCallback} from 'react';
import { Text, View, Pressable, ScrollView, Button} from 'react-native';
import Utils from '../../../assets/Utils/colors.json'
import Fonts from '../../../assets/Utils/fontSizes.json'

import { BackButtonWhite } from '../../../components/Inputs/Buttons/backButton.js';
import {GhostButton} from '../../../components/Inputs/Buttons/buttons.js'
import { EllipseImage } from '../../../components/Header/EllipseImage.js';
import GlobalStatusBar from '../../../components/StatusBar/StatusBar.js';
import {BasicNumberInputPlaceHolderKeep, BasicComboBoxInput, TextAreaInputPlaceHolderKeep, MaskedTextInputPlaceHolderKeep, BasicTextInputPlaceHolderKeep, MaskedCNPJorCPFTextInputPlaceHolderKeep} from '../../../components/Inputs/Text/InputText.js';

export default function EditarOuCriarRestaurante({navigation}) {

  const [orderNumberValue, setOrderNumberValue] = useState(0);
  const [deliveryComboValue, setdeliveryComboValue] = useState("Mesa");
  const [observationValue, setObservationValue] = useState("");
  const [telephoneValue, setTelephoneValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [neighbourhoodValue, setNeighbourhoodValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [referenceValue, setReferenceValue] = useState("");
  const [name,setName] = useState("Hamburgueria");


  return (
    <>
    <GlobalStatusBar/>
    <View style={{paddingTop:10, paddingBottom:10, height: 'auto', width: '100%', justifyContent: 'flex-start',  alignItems: 'center', backgroundColor: Utils.main_color, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width:'100%', paddingLeft: 10, paddingRight: 10}}>
            <BackButtonWhite color={Utils.white_color} width={75} navigation={navigation} />
        </View>
        <Text style={{fontSize:Fonts.f23px, color:Utils.white_color, fontWeight:'bold'}}>{name}</Text>
    </View>
    <ScrollView decelerationRate={'normal'} style={{zIndex:1000}} keyboardShouldPersistTaps="always" style={{flex:1}} > 
        <View style={{ display: 'flex', justifyContent: 'space-between'}}>
                <View style={{paddingLeft:20, marginTop:10}}>
                        <Text style={{fontSize:Fonts.f19px, color:Utils.text_opaque}}>Geral:</Text>
                </View>
                <BasicTextInputPlaceHolderKeep placeHolder="Nome" placeHolderExample="Digite o Nome" keyboardType="default" value={name} setValue={setName} mask='AAA'/>
                <MaskedCNPJorCPFTextInputPlaceHolderKeep placeHolder="CNPJ" placeHolderExample="99.999.999/9999-99" keyboardType="numeric" value={telephoneValue} setValue={setTelephoneValue} type={'cnpj'}/>

                <View style={{paddingLeft:20, marginTop:10}}>
                        <Text style={{fontSize:Fonts.f19px, color:Utils.text_opaque}}>Endereço:</Text>
                </View>
                <BasicTextInputPlaceHolderKeep placeHolder="Cidade" placeHolderExample="Digite o Estado" keyboardType="default" value={cityValue} setValue={setReferenceValue}/>
                <BasicTextInputPlaceHolderKeep placeHolder="Bairro" placeHolderExample="Digite o Bairro" keyboardType="default" value={neighbourhoodValue} setValue={setReferenceValue}/>
                <BasicTextInputPlaceHolderKeep placeHolder="Número" placeHolderExample="Digite o Número" keyboardType="numeric" value={numberValue} setValue={setReferenceValue}/>
                <View style={{paddingLeft:20, marginTop:10}}>
                        <Text style={{fontSize:Fonts.f19px, color:Utils.text_opaque}}>Contato:</Text>
                </View>
                <MaskedTextInputPlaceHolderKeep placeHolder="Telefone" placeHolderExample="(99)99999-9999" keyboardType="numeric" value={telephoneValue} setValue={setTelephoneValue} mask='(99)99999-9999'/>
                <BasicTextInputPlaceHolderKeep placeHolder="Email" placeHolderExample="Digite o Email" keyboardType="default" value={neighbourhoodValue} setValue={setNeighbourhoodValue} mask='AAA'/>
        </View>
    </ScrollView>
    <View style={{paddingLeft:20, paddingRight:20, marginBottom:10}}>
            <GhostButton onPress={() => {console.log("T1: "+orderNumberValue); }} height={50} text="Alterar" borderColor={Utils.main_color} color={Utils.main_color} navigation={navigation} routeName="ComandarProdutos" borderRadius={10}/>
    </View>
    </>
  );
}