import * as React from 'react';
import { Text, View, Pressable, ScrollView} from 'react-native';

import Utils from '../../assets/Utils/colors.json';
import Fonts from '../../assets/Utils/fontSizes.json';

import CommanderIconSvg from '../../components/SVGComponents/CommanderIconWhite';
import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import {TableCard, ProductCard} from '../../components/Cards/Cards.js'
import {FilterInputText} from '../../components/Inputs/Text/InputText.js'


export default function Tables() {
  return (
    <>
      <GlobalStatusBar/>
      <View style={{display:'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:Utils.main_color, padding:25}}>
        <FilterInputText width="100%" height={45}/>
      </View>
      <ScrollView style={{zIndex:-10}}>
        <TableCard width="100%" height={120} title="Mesa 1" description="Mesa perto da porta" employer="Gustavo P"/>
        <TableCard width="100%" height={120} title="Mesa 10" description="Mesa perto do Banheiro" employer="Ingrid C"/>
        <TableCard width="100%" height={120} title="Mesa 15" description="" employer="Gustavo P" delivery={true}/>
        <TableCard width="100%" height={120} title="Mesa 16" description="Entrega longe" employer="Ingrid C" delivery={true}/>
        <TableCard width="100%" height={120} title="Mesa 17" description="Segundo andar" employer="Ingrid C"/>
        <TableCard width="100%" height={120} title="Mesa 19" description="Mesa perto da porta" employer="Gustavo P"/>
      </ScrollView>

    </>
  );
}