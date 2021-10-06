import * as React from 'react';
import {useState} from 'react';
import { Text, View, ScrollView, Pressable} from 'react-native';

import Utils from '../../assets/Utils/colors.json';
import Fonts from '../../assets/Utils/fontSizes.json';

import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import {StatisticsTableCard} from '../../components/Cards/Cards.js'
import {FilterStatisticsTables} from '../../components/Filter/Filter.js';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { BackButtonWhite } from '../../components/Inputs/Buttons/backButton.js';
import { faPrint, faPen } from '@fortawesome/free-solid-svg-icons';




export default function StatisticsTables({navigation}) {

    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);

    const onChangeCalendar = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowCalendar(Platform.OS === 'ios');
        setDate(currentDate);
      };

  return (
    <>
      <GlobalStatusBar/>
      <View style={{paddingTop:10, paddingBottom:10, height: 'auto', width: '100%', justifyContent: 'flex-start',  alignItems: 'center', backgroundColor: Utils.main_color, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width:'100%', paddingLeft: 10, paddingRight: 10}}>
            <BackButtonWhite color={Utils.white_color} width={75} navigation={navigation} />
        </View>
        <View style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column', marginBottom:10}}>
            <Text style={{fontSize: Fonts.f18px, color:Utils.white_color, fontWeight:'bold'}}>Vendas do Dia</Text>
            <Pressable onPress={() => setShowCalendar(true)} style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', marginTop:10, alignItems: 'center'}}>
                <Text style={{fontSize:Fonts.f18px, color:Utils.white_color, fontWeight:'bold'}}>{date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()}</Text>
                <FontAwesomeIcon icon={ faPen } size={20} style={{color:Utils.white_color, marginLeft:10}} />
                {showCalendar && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={"date"}
                    is24Hour={true}
                    display="default"
                    onChange={onChangeCalendar}
                    />
                )}
            </Pressable>
        </View>
        <FilterStatisticsTables width="90%" height={45}/>
      </View>
      <ScrollView style={{zIndex:-10}}>
        <StatisticsTableCard width="100%" height={120} numero="1" hora="18:00" valor="130.00" navigation={navigation}/>
        <StatisticsTableCard width="100%" height={120} numero="10" hora="18:00" valor="70.00" navigation={navigation}/>
        <StatisticsTableCard width="100%" height={120} numero="16" hora="20:00" valor="40.00" navigation={navigation}/>
        <StatisticsTableCard width="100%" height={120} numero="17" hora="19:30" valor="43.00" navigation={navigation}/>
        <StatisticsTableCard width="100%" height={120} numero="20" hora="20:00" valor="10.00" navigation={navigation}/>
        <StatisticsTableCard width="100%" height={120} numero="23" hora="19:00" valor="15.00" navigation={navigation}/>
      </ScrollView>

    </>
  );
}