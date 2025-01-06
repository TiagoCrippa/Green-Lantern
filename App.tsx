import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import symbolOn from './assets/pictures/symbol-on.png';
import simbolOff from './assets/pictures/symbol-off.png';

export default function App() {
  const [isActive, setisActive] = useState(false);

  function handleSymbol() {
    setisActive((oldValue:boolean) => {
      return !oldValue;
    })
    console.log(isActive);
  }

  return (
    <View style={isActive ? styles.containerOn : styles.ContainerOff}>
      <TouchableOpacity onPress={handleSymbol}>
      <Image source={isActive ? symbolOn : simbolOff}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContainerOff: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
