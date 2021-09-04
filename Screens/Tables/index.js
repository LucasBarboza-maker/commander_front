import * as React from 'react';
import { Text, View, Pressable} from 'react-native';

import Utils from '../../assets/Utils/colors.json';
import Fonts from '../../assets/Utils/fontSizes.json';

import CommanderIconSvg from '../../components/SVGComponents/CommanderIconWhite';
import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';

import {FilterInputText} from '../../components/Inputs/Text/InputText.js'


export default function Tables() {
  return (
    <>
    <GlobalStatusBar/>
      <View style={{paddingTop:10, height: 54, width: '100%', justifyContent: 'flex-start',  alignItems: 'center', backgroundColor: Utils.main_color, paddingLeft: 34, paddingRight: 34}}>
        <FilterInputText width="100%" height={45}/>
      </View>
    </>
  );
}