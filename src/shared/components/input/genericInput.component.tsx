// @ts-nocheck
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';

import {styles} from './genericInput.styles';
import defaultStyles from '../../styles/styles';

const {
  inputBgColorGray,
  colorDarkGray,
  fontSize13,
  LatoRegular,
  textInputVerticalPadding,
} = defaultStyles;
const {textInput} = styles;

const GenericInput = ({
  type = 'text',
  placeholder,
  placeholderTextColor,
  name,
  onChangeText,
  onEndEditing,
  style,
  value,
  cursor,
  numberOfLines,
  multiline,
  keyboardType,
  onFocus,
  onBlur,
}: any) => {
  return (
    <View>
      <TextInput
        type={type}
        name={name}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        placeholder={placeholder}
        style={[textInput, textInputVerticalPadding, style]}
        value={value}
        selection={cursor}
        numberOfLines={numberOfLines}
        multiline={multiline}
        keyboardType={keyboardType}
        placeholderTextColor={placeholderTextColor}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  );
};

export default GenericInput;
