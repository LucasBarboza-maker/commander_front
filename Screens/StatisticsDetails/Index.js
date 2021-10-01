import * as React from 'react';
import {useState} from 'react';
import { Text, View, ScrollView, Pressable} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Utils from '../../assets/Utils/colors.json';
import Fonts from '../../assets/Utils/fontSizes.json';

import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { BackButtonWhite } from '../../components/Inputs/Buttons/backButton.js';
import { faPrint, faPen } from '@fortawesome/free-solid-svg-icons';


export default function StatisticsDetails({navigation}) {

    const[sellHistoric, setSellHistoric] = useState([{productName:'Hamburguer', quantity:15}, {productName:'Batata', quantity:5}, {productName:'XBurguer', quantity:3}, {productName:'XBacon', quantity:10}])
    const [date, setDate] = useState(new Date());
    const [hour, setHour] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [showClock, setShowClock] = useState(false);

    
    function card(value, index){
        return(
            <View key={index} style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', padding:10, borderWidth:2, borderColor: 'white',borderBottomColor:Utils.border_opaque}}>
                <Text style={{fontSize:Fonts.f19px, color:Utils.black_color}}>{value.productName}</Text>
                <Text style={{fontSize:Fonts.f19px, color:Utils.text_opaque}}>{value.quantity}</Text>
            </View>
        );
    }
  
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
      <View style={{paddingTop:10, paddingBottom:10, height: 130, width: '100%', justifyContent: 'flex-start',  alignItems: 'center', backgroundColor: Utils.main_color, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width:'100%', paddingLeft: 10, paddingRight: 10}}>
            <BackButtonWhite color={Utils.white_color} width={75} navigation={navigation} />
        </View>
        <Text style={{fontSize:Fonts.f23px, color:Utils.white_color, fontWeight:'bold'}}>Detalhes Gerais</Text>
        <Pressable onPress={() => setShowCalendar(true)} style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', marginTop:10, alignItems: 'center'}}>
            <Text style={{fontSize:Fonts.f23px, color:Utils.white_color, fontWeight:'bold'}}>{date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()}</Text>
            <FontAwesomeIcon icon={ faPen } size={20} style={{color:Utils.white_color, marginLeft:10}} />
        </Pressable>
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
      </View>

      <ScrollView>
        <View style={{display: 'flex', alignItems: 'center', paddingBottom:10}}>
            <View style={{width:'90%', display:'flex', flexDirection:'row', justifyContent: 'space-between', marginTop:10, marginBottom:10}}>
                <Text style={{fontSize:Fonts.f18px, color:Utils.text_opaque}}>Resumo</Text>
                <FontAwesomeIcon onPress={()=> setVisible(false)} icon={ faPrint } size={32} style={{color:Utils.text_opaque}} />
            </View>   
            <View style={{width:'90%', elevation:10, backgroundColor:'white', minHeight:200, height:'auto'}}>
                {sellHistoric.map((e,index) => {
                    return card(e,index);
                })}
            </View>
            <View style={{width:'90%', height:100, marginTop:25, backgroundColor:Utils.white_color, elevation:5, padding:14, display: 'flex', justifyContent: 'space-between'}}>
                <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize:Fonts.f18px, color:Utils.black_color}}>Quantidade de Mesas</Text>
                    <Text style={{fontSize:Fonts.f23px, color:Utils.green_opaque, fontWeight:'bold'}}>75</Text>
                </View>
                <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize:Fonts.f18px, color:Utils.text_opaque}}>01/10/2021</Text>
                    <Text style={{fontSize:Fonts.f18px, color:Utils.text_opaque}}>Ver Detalhes</Text>
                </View>
            </View>    
        </View> 
      </ScrollView>

    </>
  );
}