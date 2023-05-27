import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {},
  topimage: {
    right: 10,
    marginRight: -110,
    marginTop: -50,
    top: 0,
    zIndex: 2,
    transform: [{rotate: '20deg'}],
  },
  logoimage: {
    width: '100%',
    height: 50,
    marginBottom: 35,
  },
  removebg: {
    position: 'relative',
    zIndex: 60,
    // ackgroundColor: '#F9AB9B',
  },
  redtext: {
    // textAlign: 'center',
    color: '#EC3030',
    paddingBottom: 20,
  },
  textInputBasic: {
    backgroundColor: '#fffff',
    borderWidth: 1,
    // borderColor: '#707070',
    borderRadius: 7,
    // color: '#707070',
    paddingLeft: 15,
    // fontSize: 15,
  },
  textInput: {
    marginTop: 10,
    marginBottom: 10,
  },
  forgotpw: {
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  companyView: {
    marginTop: 40,
    fontWeight: 'bold',
    fontFamily: 'Lato-Bold',
  },
  footerloginimg: {
    marginBottom: -100,
    bottom: 0,
    zIndex: 2,
  },
});
