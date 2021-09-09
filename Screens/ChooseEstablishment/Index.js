import * as React from 'react';
import { Text, View, Pressable, ScrollView} from 'react-native';
import Utils from '../../assets/Utils/colors.json'
import Button from '../../components/Inputs/Buttons/buttons.js'
import Fonts from '../../assets/Utils/fontSizes.json'


import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import CommanderIconSvg from '../../components/SVGComponents/CommanderIconWhite';
import { EllipseImage } from '../../components/Header/EllipseImage.js';
import { StablishmentCardChoose } from '../../components/Cards/Cards.js'

import { ImageButtonManageStablishment, ImageButtonPrinter, ImageButtonOrder } from '../../components/Inputs/Buttons/ImageButton.js';
import { BackButtonWhite } from '../../components/Inputs/Buttons/backButton.js';


export default function Home({ navigation }) {
    return (
        <>
            <GlobalStatusBar />
            <View style={{ paddingTop: 23, paddingLeft: 6, paddingRight: 16, height: '28%', width: '100%', justifyContent: 'flex-start', backgroundColor: Utils.main_color, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <BackButtonWhite color={Utils.white_color} width={75} navigation={navigation} />
                    <Button color={Utils.black_color} width={140} height={30} text="Adicionar" bgColor={Utils.white_color} />

                </View>
                <View style={{ paddingTop: 10, height: '30%', width: '100%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Utils.main_color, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <EllipseImage height={160} width={'100%'} image={require('../../assets/myImages/PerfilImage/Imagem_perfil.jpg')} />
                </View>
            </View>

            <ScrollView style={{ paddingLeft: 23, paddingRight: 23, }}>
                <StablishmentCardChoose title="Hamburgueria" value="Est. União Industria, Corrêas, 300" status="Fechado" />
                <StablishmentCardChoose title="Hamburgueria" value="Est. União Industria, Corrêas, 300" status="Fechado" />
                <StablishmentCardChoose title="Hamburgueria" value="Est. União Industria, Corrêas, 300" status="Fechado" />
                <StablishmentCardChoose title="Hamburgueria" value="Est. União Industria, Corrêas, 300" status="Fechado" />
                <StablishmentCardChoose title="Hamburgueria" value="Est. União Industria, Corrêas, 300" status="Fechado" />
                <StablishmentCardChoose title="Hamburgueria" value="Est. União Industria, Corrêas, 300" status="Fechado" />
                <StablishmentCardChoose title="Hamburgueria" value="Est. União Industria, Corrêas, 300" status="Fechado" />
                <StablishmentCardChoose title="Hamburgueria" value="Est. União Industria, Corrêas, 300" status="Fechado" />

                <StablishmentCardChoose title="Hamburgueria" value="Est. União Industria, Corrêas, 300" status="Fechado" />
                <StablishmentCardChoose title="Hamburgueria" value="Est. União Industria, Corrêas, 300" status="Fechado" />
                <StablishmentCardChoose title="Hamburgueria" value="Est. União Industria, Corrêas, 300" status="Fechado" />
                <StablishmentCardChoose title="Hamburgueria" value="Est. União Industria, Corrêas, 300" status="Fechado" />
                <StablishmentCardChoose title="Hamburgueria" value="Est. União Industria, Corrêas, 300" status="Fechado" />
                <StablishmentCardChoose title="Hamburgueria" value="Est. União Industria, Corrêas, 300" status="Fechado" />
                <StablishmentCardChoose title="Hamburgueria" value="Est. União Industria, Corrêas, 300" status="Fechado" />
                
               
                
            </ScrollView>
        </>
    );
}