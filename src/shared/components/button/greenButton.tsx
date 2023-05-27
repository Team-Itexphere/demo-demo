import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const GreenButton = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CAD400',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 10,
    // justifyContent: 'center'
    marginVertical: 5,
    borderRadius: 25,
  },
  btnText: {
    color: '#fff',
    fontWeight: '800',
    letterSpacing: 5,
    fontSize: 18,
    fontFamily: 'Lato-Heavy',
    // backgroundColor: '#F9AB9B'
  },
});

export default GreenButton;
