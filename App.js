import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login/Index';
import SignUp from './Screens/SignUp/Index';
import Main from './Screens/MainRoutes/Index';
import ChooseEstablishment from './Screens/ChooseEstablishment/Index';
import ManageEstablishment from './Screens/ManageEstablishment/Index';
import PrinterConfig from './Screens/Printer/Index';
import BluetoothPrinterConfig from './Screens/BluetoothPrinterConfig/Index';
import WifiPrinterConfig from './Screens/WifiPrinterConfig/Index';
import Comandar from './Screens/Order/Index.js';
import ComandarProdutos from './Screens/OrderProducts/Index.js';
import ProductDetails from './Screens/ProductDetails/Index.js';
import TableDetails from './Screens/TableDetails/Index.js';
import Statistics from './Screens/Statistics/Index.js';
import StatisticsDetails from './Screens/StatisticsDetails/Index.js';
import StatisticsTables from './Screens/StatisticsTables/Index.js';
import EditOrCreateEstablishment from './Screens/EditOrCreate/Establishment/Index';
import MenuProducts from './Screens/MenuProducts/Index.js';
import EditOrCreateProduct from './Screens/EditOrCreate/Product/Index';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'White'
  },
};

const MyStack = () => {
  return (
    <>
      <NavigationContainer theme={MyTheme}>
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
           
          <Stack.Screen
            name="Comandar"
            component={Comandar}
            options={{ title: 'Comandar' }}
          />

          <Stack.Screen
            name="ComandarProdutos"
            component={ComandarProdutos}
            options={{ title: 'ComandarProdutos' }}
          />

          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ title: 'ProductDetails' }}
          />

          <Stack.Screen
            name="TableDetails"
            component={TableDetails}
            options={{ title: 'TableDetails' }}
          />

          <Stack.Screen
            name="Statistics"
            component={Statistics}
            options={{ title: 'Statistics' }}
          />

          <Stack.Screen
            name="StatisticsDetails"
            component={StatisticsDetails}
            options={{ title: 'StatisticsDetails' }}
          />

          <Stack.Screen
            name="StatisticsTables"
            component={StatisticsTables}
            options={{ title: 'StatisticsTables' }}
          />

          <Stack.Screen
            name="EditOrCreateEstablishment"
            component={EditOrCreateEstablishment}
            options={{ title: 'EditOrCreateEstablishment' }}
          />

          <Stack.Screen
            name="MenuProducts"
            component={MenuProducts}
            options={{ title: 'MenuProducts' }}
          />
                    
          <Stack.Screen
            name="EditOrCreateProduct"
            component={EditOrCreateProduct}
            options={{ title: 'EditOrCreateProduct' }}
          />
          
        </Stack.Navigator>
        
      </NavigationContainer>
    </>
  );
};

export default MyStack;