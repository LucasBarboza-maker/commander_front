import * as React from 'react';
import { Text, View } from 'react-native';

import GlobalStatusBar from '../../components/StatusBar/StatusBar.js';


export default function Tables() {
  return (
    <>
    <GlobalStatusBar/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Mesas</Text>
    </View>
    </>
  );
}