import * as React from 'react';
import { Text, View, Pressable, ScrollView} from 'react-native';
import Utils from '../../assets/Utils/colors.json'
import {Button} from '../../components/Inputs/Buttons/buttons.js'
import Fonts from '../../assets/Utils/fontSizes.json'


import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import CommanderIconSvg from '../../components/SVGComponents/CommanderIconWhite';
import { EllipseImage } from '../../components/Header/EllipseImage.js';
import { StablishmentCardChoose } from '../../components/Cards/Cards.js'

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
                    <EllipseImage height={160} width={'100%'} image={require('../../assets/myImages/BackgroundImages/impressora.jpg')} text="Configurar Impressora" />
                </View>
            </View>
            <PressableInfoCard title="Lan" value="Configurar por lan(WI-FI)" navigation={navigation} screenName="WifiPrinterConfig"></PressableInfoCard>
            <PressableInfoCard title="Bluetooth" value="Configurar Bluetooth" navigation={navigation} screenName="BluetoothPrinterConfig"></PressableInfoCard>
        </>
    );
}