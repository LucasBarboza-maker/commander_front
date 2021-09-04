import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login/Index';
import SignUp from './Screens/SignUp/Index';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;