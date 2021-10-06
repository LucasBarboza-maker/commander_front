import * as React from 'react';
import {useState,useCallback} from 'react';
import { Text, View, Pressable, ScrollView, Button} from 'react-native';
import Utils from '../../../assets/Utils/colors.json'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
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
    <View style={{paddingTop:10, height: 250, width: '100%', justifyContent: 'flex-start',  alignItems: 'center', backgroundColor: Utils.main_color, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width:'100%', paddingLeft: 10, paddingRight: 10}}>
                    <BackButtonWhite color={Utils.white_color} width={75} navigation={navigation} />

                </View>
                <View style={{ paddingTop: 10, height: '30%', width: '100%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Utils.main_color, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <EllipseImage height={160} width={'100%'} image={require('../../../assets/myImages/PerfilImage/Imagem_perfil.jpg')} text={name} />
                    <FontAwesomeIcon onPress={()=> setVisible(false)} icon={ faCamera } size={38} style={{color:Utils.white_color, position:'absolute', bottom:-90, right:125}} />                    
                </View>
    </View>
    <ScrollView decelerationRate={'normal'} style={{zIndex:1000}} keyboardShouldPersistTaps="always" style={{flex:1}} > 
        <View style={{ display: 'flex', justifyContent: 'space-between'}}>
                <BasicTextInputPlaceHolderKeep placeHolder="Nome" placeHolderExample="Digite o Nome" keyboardType="default" value={name} setValue={setName} mask='AAA'/>
                <BasicTextInputPlaceHolderKeep placeHolder="Preço" placeHolderExample="Digite o Preço" keyboardType="numeric" value={cityValue} setValue={setReferenceValue}/>
                <BasicTextInputPlaceHolderKeep placeHolder="Grupo" placeHolderExample="Digite o Grupo" keyboardType="default" value={neighbourhoodValue} setValue={setReferenceValue}/>
                <BasicTextInputPlaceHolderKeep placeHolder="Observação" placeHolderExample="Digite a Observação" keyboardType="default" value={numberValue} setValue={setReferenceValue}/>
        </View>
    </ScrollView>
    <View style={{paddingLeft:20, paddingRight:20, marginBottom:10}}>
            <GhostButton onPress={() => {console.log("T1: "+orderNumberValue); }} height={50} text="Alterar" borderColor={Utils.main_color} color={Utils.main_color} navigation={navigation} routeName="ComandarProdutos" borderRadius={10}/>
    </View>
    </>
  );
}