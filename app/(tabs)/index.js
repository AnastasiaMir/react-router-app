import * as React from 'react';
import { Text, View } from 'react-native';


function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'midnightblue'}}>
      <Text style={{color: 'white', textAlign: 'center'}}>Hello! My name Anastasia Mironova from 3105D group </Text>
    </View>
  );
}

export default AboutScreen;