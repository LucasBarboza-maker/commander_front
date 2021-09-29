import * as React from 'react';
import { Text, View, Pressable, ScrollView} from 'react-native';
import Utils from '../../assets/Utils/colors.json';
import {GhostButton} from '../../components/Inputs/Buttons/buttons.js';
import Fonts from '../../assets/Utils/fontSizes.json';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { faBluetooth } from '@fortawesome/free-brands-svg-icons';

import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import { EllipseImage } from '../../components/Header/EllipseImage.js';

import {InfoCard, PressableInfoCard, StablishmentCard} from '../../components/Cards/Cards.js'
import { BackButtonWhite } from '../../components/Inputs/Buttons/backButton.js';


export default function ChoosePrinterConnection({ route, navigation }) {

    return (
        <>
            <GlobalStatusBar />
          
                <View style={{paddingTop:10, height: '30%', width: '100%', justifyContent: 'flex-start',  alignItems: 'center', backgroundColor: Utils.main_color, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width:'100%', paddingLeft: 10, paddingRight: 10}}>
                        <BackButtonWhite color={Utils.white_color} width={75} navigation={navigation} />

                    </View>
                    <View style={{ paddingTop: 10, height: '30%', width: '100%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Utils.main_color, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                        <EllipseImage height={160} width={'100%'} image={require('../../assets/myImages/BackgroundImages/impressora.jpg')} text="Bluetooth" />
                    </View>
                </View>
                <ScrollView>
                    <View style={{height: 500, display: 'flex', justifyContent: 'space-between'}}>
                        <View style={{height:70, borderBottomWidth:1, borderColor:Utils.border_opaque, display: 'flex', alignItems: 'center' ,justifyContent: 'space-around', flexDirection: 'row'}}> 
                            <FontAwesomeIcon onPress={()=> setVisible(false)} icon={ faBluetooth } size={38} style={{color:Utils.black_opaque}} />
                            <Text style={{fontSize:Fonts.f15px}}>Toque para procurar a impressora</Text>
                        </View> 
                    
                            <View style={{display:'flex', alignItems: 'center', width:'100%', paddingLeft:20, paddingRight:20, marginTop:20}}>
                                <Text style={{width:'100%', textAlign:'left'}}>Lista de impressoras</Text>
                                <ScrollView style={{height:250, width:'100%', elevation:5,backgroundColor:Utils.white_color}}>
                                    {/* Inicio do card de impressora*/}
                                    <View style={{padding:10, borderBottomWidth:1, borderColor:Utils.border_opaque}}>
                                        <Text style={{fontSize:Fonts.f19px, color:Utils.black_color}}>Impressora 1</Text>
                                        <Text style={{fontSize:Fonts.f15px, color:Utils.black_opaque}}>Toque para selecionar essa Impressora</Text>
                                    </View>
                                    {/* Inicio do card de impressora*/}
                                </ScrollView>

                        </View>

                        <View style={{height:70, display: 'flex', alignItems: 'center' ,justifyContent: 'center', flexDirection: 'row', marginTop:15}}> 
                            <FontAwesomeIcon onPress={()=> setVisible(false)} icon={ faPrint } size={38} style={{color:Utils.black_opaque, marginRight:10}} />
                            <Text style={{fontSize:Fonts.f15px}}>Testar impressora</Text>
                        </View>

                        <View style={{paddingLeft:20, paddingRight:20}}>
                            <GhostButton color={Utils.green_dark} width={"100%"} height={38} text="Confirmar" bgColor={Utils.white_color} borderColor={Utils.green_dark} borderRadius={10}/>
                        </View>
                    </View>
            </ScrollView>
        </>
    );
}