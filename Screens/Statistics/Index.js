import * as React from 'react';
import {useState,useCallback} from 'react';
import { Text, View, Pressable, ScrollView, Button, Dimensions} from 'react-native';
import Utils from '../../assets/Utils/colors.json'
import Fonts from '../../assets/Utils/fontSizes.json'

import { BackButtonWhite } from '../../components/Inputs/Buttons/backButton.js';
import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import {StatisticCard, AllStatisticsCard} from '../../components/Cards/Cards.js'
import {LineChart} from "react-native-chart-kit";

export default function Statistics({navigation}) {

  const data = {
    labels: ["17", "18", "19", "20", "21", "22", "23", "00", "01"],
    datasets: [
      {
        data: [20, 45, 28, 40, 30, 43, 30, 20, 50, 60],
        color: (opacity = 1) => `rgba(255, 255, 255, 0.8)`, // optional
        strokeWidth: 3, // optional
        backgroundGradientFrom:'white',
        backgroundGradientTo:'white'
      }
    ],
  };

  const chartConfig = {
    decimalPlaces: 0,
    backgroundGradientFrom: "transparent",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "black",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 254, 255, 0.8)`,
    strokeWidth: 1, // optional, default 3
    barPercentage: 0.5,
    fillShadowGradient:Utils.green_opaque,
    fillShadowGradientOpacity:0.8,
    useShadowColorFromDataset: false,
  };

  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showClock, setShowClock] = useState(false);


  const onChangeCalendar = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowCalendar(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const onChangeHour = (event, selectedHour) => {
    const currentHour = selectedHour || hour;
    setShowClock(Platform.OS === 'ios');
    setHour(currentHour);
  };
  return (
    <>
    <GlobalStatusBar/>
    <View style={{paddingTop:10, paddingBottom:10, height: 380, width: '100%', justifyContent: 'flex-start',  alignItems: 'center', backgroundColor: Utils.main_color, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width:'100%', paddingLeft: 10, paddingRight: 10}}>
            <BackButtonWhite color={Utils.white_color} width={75} navigation={navigation} />
        </View>
        <Text style={{fontSize:Fonts.f23px, color:Utils.white_color, fontWeight:'bold'}}>Hamburgueria</Text>
        <View style={{display: 'flex',marginTop:10, width:'90%', flexDirection:'row', justifyContent:'space-between'}}>
          
        </View>
        <Text style={{fontSize:Fonts.f18px, color:Utils.white_color, marginTop:10}}>01/10/2021</Text>
        <Text style={{fontSize:Fonts.f18px, color:Utils.white_color, marginTop:5}}>Últimas 8 Horas</Text>
        <LineChart
            data={data}
            width={Dimensions.get('window').width}
            height={220}
            chartConfig={chartConfig}
            withDots={false}
            withInnerLines={false}
            bezier
        />
    </View>
    <ScrollView>
        <View style={{display: 'flex', alignItems: 'center', paddingBottom:10}}>
            <AllStatisticsCard height={90} width={'95%'} valor={"Vendas Armazenadas"} legendaDoTotal={"Todas as Vendas"} legendaDeDetalhes={"Ver Detalhes"} navigation={navigation}/>
            <Text style={{marginTop:20, fontSize:Fonts.f20px, color:Utils.text_opaque}}>Últimas 8 horas</Text>
            <StatisticCard height={90} width={'95%'} valor={"2000,00"} legendaDoTotal={"Valor total das 8 horas"} legendaDeDetalhes={"Ver Detalhes"}/>
            <StatisticCard height={90} width={'95%'} valor={"1,140,00"} legendaDoTotal={"Total de hoje por Ingrid Silva"}  legendaDeDetalhes={"Ver Detalhes"}/>
            <StatisticCard height={90} width={'95%'} valor={"900,00"} legendaDoTotal={"Total de Gustavo Pinto"}  legendaDeDetalhes={"Ver Detalhes"}/>
        </View>
    </ScrollView>
    </>
  );
}