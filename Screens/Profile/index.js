import * as React from 'react';
import { Text, View } from 'react-native';

import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';


export default function Profile() {
  return (
    <>
    <GlobalStatusBar/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Perfil</Text>
    </View>
    </>
  );
}