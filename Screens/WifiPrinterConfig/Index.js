import * as React from 'react';
import { useState } from 'react';
import { Text, View, Pressable, ScrollView} from 'react-native';
import Utils from '../../assets/Utils/colors.json';
import {GhostButton} from '../../components/Inputs/Buttons/buttons.js';
import Fonts from '../../assets/Utils/fontSizes.json';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import { EllipseImage } from '../../components/Header/EllipseImage.js';

import {MaskedTextInputPlaceHolderKeep, BasicNumberInputPlaceHolderKeep} from '../../components/Inputs/Text/InputText.js';
import { BackButtonWhite } from '../../components/Inputs/Buttons/backButton.js';

import { TextInputMask } from 'react-native-masked-text'

export default function WifiPrinterConfig({ route, navigation }) {

    const [hostAddress, setHostAddress] = useState("");
    const [portValue, setPortValue] = useState("");
    const [international, setInternational] = useState("");

    return (
        <>
            <GlobalStatusBar />
          
                <View style={{paddingTop:10, height: 250, width: '100%', justifyContent: 'flex-start',  alignItems: 'center', backgroundColor: Utils.main_color, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width:'100%', paddingLeft: 10, paddingRight: 10}}>
                        <BackButtonWhite color={Utils.white_color} width={75} navigation={navigation} />

                    </View>
                    <View style={{ paddingTop: 10, height: '30%', width: '100%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Utils.main_color, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                        <EllipseImage height={160} width={'100%'} image={require('../../assets/myImages/BackgroundImages/impressora.jpg')} text="LAN" />
                    </View>
                </View>
                <ScrollView>
                    <View style={{height: 500, display: 'flex', justifyContent: 'space-between'}}>
                        <View style={{height:70, borderBottomWidth:1, borderColor:Utils.border_opaque, display: 'flex', alignItems: 'center' ,justifyContent: 'space-around', flexDirection: 'row'}}> 
                            <FontAwesomeIcon onPress={()=> setVisible(false)} icon={ faWifi } size={38} style={{color:Utils.black_opaque}} />
                            <Text style={{fontSize:Fonts.f15px}}>Toque para procurar a impressora</Text>
                        </View> 

                        <View>
                            <Text style={{marginLeft:20, fontSize:Fonts.f18px}}>Printer Info:</Text>
                            <MaskedTextInputPlaceHolderKeep placeHolder="Host" placeHolderExample="Ex:192.168.0.1" keyboardType="numeric" value={hostAddress} setValue={setHostAddress} mask='999.999.9.9'/>
                            <BasicNumberInputPlaceHolderKeep placeHolder="Port" placeHolderExample="Ex:8000" value={portValue} setValue={setPortValue}/>
                        </View>

                        <View style={{height:70, display: 'flex', alignItems: 'center' ,justifyContent: 'center', flexDirection: 'row', marginTop:15}}> 
                            <FontAwesomeIcon onPress={()=> setVisible(false)} icon={ faPrint } size={38} style={{color:Utils.black_opaque, marginRight:10}} />
                            <Text style={{fontSize:Fonts.f15px}}>Testar impressora</Text>
                        </View>

                        <View style={{paddingLeft:20, paddingRight:20}}>
                            <GhostButton color={Utils.green_dark} width='100%' height={38} text="Confirmar" bgColor={Utils.white_color} borderColor={Utils.green_dark} borderRadius={10}/>
                        </View>
                    </View>
                </ScrollView>
        </>
    );
}