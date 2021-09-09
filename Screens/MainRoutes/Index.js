import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Utils from '../../assets/Utils/colors.json'
import Home from '../Home/Index';
import Tables from '../Tables/';
import Products from '../Products/';
import Profile from '../Profile/';
import HomeTabIconSvg from "../../components/SVGComponents/HomeTab";
import HomeTabInactiveIconSvg from "../../components/SVGComponents/HomeTabInactive";
import ProductsTabIconSvg from "../../components/SVGComponents/ProductsTab";
import ProductsTabInactiveIconSvg from "../../components/SVGComponents/ProductsTabInactive";
import ProfileTabIconSvg from "../../components/SVGComponents/ProfileTab";
import ProfileTabInactiveIconSvg from "../../components/SVGComponents/ProfileTabInactive";
import TablesTabIconSvg from "../../components/SVGComponents/TablesTab";
import TablesTabInactiveIconSvg from "../../components/SVGComponents/TablesTabInactive";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    
      <Tab.Navigator 
      activeColor="#00aea2"
      shifting={true}
      screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Utils.main_color,
            tabBarInactiveTintColor: Utils.text_opaque,
          }}>
        <Tab.Screen
          name="Início"
          component={Home}
          options={{
            activeColor:'white',
            title: 'Início',
            tabBarIcon: ({size,focused,color}) => {
              if(focused == true){
                return (
                  <HomeTabIconSvg/>
                );
              }else if(focused == false){
                return (
                  <HomeTabInactiveIconSvg/>
                );    
              }
            },
          }}
        />
        <Tab.Screen
          name="Mesas"
          component={Tables}
          options={{
            title: 'Mesas',
            tabBarIcon: ({size,focused,color}) => {
              if(focused == true){
                return (
                  <TablesTabIconSvg color={Utils.main_color}/>

                );
              }else if(focused == false){
                return (
                  <TablesTabInactiveIconSvg color={Utils.tab_button_inactive}/>

                );    
              }
            },
          }}
        />
        <Tab.Screen
          name="Produtos"
          component={Products}
          options={{
            title: 'Produtos',
            tabBarIcon: ({size,focused,color}) => {
              if(focused == true){
                return (
                  <ProductsTabIconSvg color={Utils.main_color}/>

                );
              }else if(focused == false){
                return (
                  <ProductsTabInactiveIconSvg color={Utils.tab_button_inactive}/>

                );    
              }
            },
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            title: 'Perfil',
            tabBarIcon: ({size,focused,color}) => {
              if(focused == true){
                return (
                  <ProfileTabIconSvg color={Utils.main_color}/>

                );
              }else if(focused == false){
                return (
                  <ProfileTabInactiveIconSvg color={Utils.tab_button_inactive}/>

                );    
              }
            },
          }}
        />
        
        

      </Tab.Navigator>
  );
}