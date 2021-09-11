import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login/Index';
import SignUp from './Screens/SignUp/Index';
import Main from './Screens/MainRoutes/Index';
import ChooseEstablishment from './Screens/ChooseEstablishment/Index';
import ManageEstablishment from './Screens/ManageEstablishment/Index';
import PrinterConfig from './Screens/Printer/Index';
import BluetoothPrinterConfig from './Screens/BluetoothPrinterConfig/Index';
import WifiPrinterConfig from './Screens/WifiPrinterConfig/Index';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: 'SignUp' }}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ title: 'Main' }}
          />

          <Stack.Screen
            name="ChooseEstablishment"
            component={ChooseEstablishment}
            options={{ title: 'ChooseEstablishment' }}
          />

        <Stack.Screen
            name="ManageEstablishment"
            component={ManageEstablishment}
            options={{ title: 'ManageEstablishment' }}
          />

        <Stack.Screen
            name="PrinterConfig"
            component={PrinterConfig}
            options={{ title: 'PrinterConfig' }}
          />

          <Stack.Screen
            name="WifiPrinterConfig"
            component={WifiPrinterConfig}
            options={{ title: 'WifiPrinterConfig' }}
          />
          
          <Stack.Screen
            name="BluetoothPrinterConfig"
            component={BluetoothPrinterConfig}
            options={{ title: 'BluetoothPrinterConfig' }}
          />
        </Stack.Navigator>
        
      </NavigationContainer>
    </>
  );
};

export default MyStack;