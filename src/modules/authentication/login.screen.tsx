// @ts-nocheck
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Linking,
  Image,
  Alert,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {loginAction} from '../../redux/actions/authentication/login.action';
import GreenButton from '../../shared/components/button/greenButton';

import assetsSvg from '../../assets/assets-svg';
const {LoginFooter, LoginHeader, PelawaththaLogo} = assetsSvg;

const initialState = {
  userName: '',
  password: '',
};

import defaultStyles from '../../shared/styles/styles';
import {styles} from './login.styles';
import GenericInput from '../../shared/components/input/genericInput.component';
import commonColors from '../../shared/styles/colors';
import {useNavigation} from '@react-navigation/native';
import {HOME} from '../../navigation/navigation.type';

const {
  displayFlex,
  flex1,
  alignCenter,
  textCenter,
  resizeModeContain,
  justifyCenter,
  bgColorLightGray,
  borderColorDarkGray,
  colorDarkGray,
  fontSize15,
  LatoRegular,
  colorDarkBlue,
  textInputVerticalPadding,
  containerHeader,
} = defaultStyles;
const {logoimage, textInputBasic, textInput, removebg, forgotpw, companyView} =
  styles;

const Login = () => {
  const navigation = useNavigation();
  // const dispatch = useDispatch();
  const [formData, setFormData] = useState('');

  const submit = () => {
    navigation.navigate(HOME);
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={flex1}>
      <View
        style={[
          displayFlex,
          alignCenter,
          flex1,
          // justifyCenter,
          bgColorLightGray,
          // keyboardStatus && removebg,
          containerHeader,
        ]}>
        <PelawaththaLogo width={400} height={500} />

        <TextInput
          value={formData.userName}
          name="userName"
          type="text"
          keyboardType="email-address"
          placeholder="User Name"
          placeholderTextColor="#b7b7b7"
          style={{
            width: '100%',
            padding: 12,
            marginTop: -10,
            borderRadius: 10,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#7D7F8B',
            backgroundColor: '#DAE7F0',
          }}
          onChangeText={text => {
            setFormData({...formData, userName: text});
          }}
        />

        <TextInput
          value={formData.userName}
          name="userName"
          type="text"
          keyboardType="email-address"
          placeholder="Password"
          placeholderTextColor="#b7b7b7"
          style={{
            width: '100%',
            padding: 12,
            marginTop: 10,
            borderRadius: 10,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#7D7F8B',
            backgroundColor: '#DAE7F0',
          }}
          onChangeText={text => {
            setFormData({...formData, userName: text});
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: '#0F70D3',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            paddingVertical: 12,
            marginTop: 10,
            // justifyContent: 'center'
            // marginVertical: 5,
            borderRadius: 25,
          }}
          onPress={submit}>
          <View>
            <Text
              style={{
                color: 'white',
                fontWeight: '800',
                letterSpacing: 3,
                fontSize: 20,
                fontFamily: 'Lato-Heavy',
                // backgroundColor: '#F9AB9B'
              }}>
              Login
            </Text>
          </View>
        </TouchableOpacity>
        {/* <Text
          style={{
            backgroundColor: 'blue',
          }}>
          Hello
        </Text> */}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
