import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import defaultStyles from '../../shared/styles/styles';
import assetsSvg from '../../assets/assets-svg';

const {QRCode, PelawaththaLogo} = assetsSvg;
const {flex1, containerHeader, displayFlex, alignCenter} = defaultStyles;
const Home = () => {
  const [formData, setFormData] = useState('');

  const submit = () => {};
  return (
    <View style={[flex1, containerHeader, {}]}>
      <View
        style={[
          {backgroundColor: '#007EC5', borderRadius: 10},
          displayFlex,
          alignCenter,
        ]}>
        <QRCode width={200} height={150} />
      </View>

      <View
        style={{
          marginVertical: 30,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TextInput
          value={formData}
          name="userName"
          type="text"
          keyboardType="email-address"
          placeholder="Farmer Reg. Num"
          placeholderTextColor="#b7b7b7"
          style={{
            width: '68%',
            padding: 12,
            // marginTop: 10,
            borderRadius: 10,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#7D7F8B',
            backgroundColor: '#DAE7F0',
          }}
          onChangeText={text => {
            setFormData(text);
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#0F70D3',
            display: 'flex',
            alignItems: 'center',
            width: '30%',
            // paddingVertical: 12,
            // marginTop: 10,
            justifyContent: 'center',
            // marginVertical: 5,
            borderRadius: 10,
          }}
          onPress={submit}>
          {/* <View> */}
          <Text
            style={{
              color: 'white',
              fontWeight: '200',
              // letterSpacing: 3,
              fontSize: 14,
              fontFamily: 'Lato-Heavy',
              // backgroundColor: '#F9AB9B'
            }}>
            SEARCH
          </Text>
          {/* </View> */}
        </TouchableOpacity>
      </View>
      <View style={[displayFlex, alignCenter, {marginTop: -80}]}>
        <PelawaththaLogo width={400} height={500} />
      </View>
    </View>
  );
};

export default Home;
