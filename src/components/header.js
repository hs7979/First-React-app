import React from 'react';
import {Text,View} from 'react-native';

const Header = () =>{
  const{textStyle,viewStyle}= styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums</Text>
    </View>
  );
};

const styles = {
  viewStyle:{
    backgroundColor: 'cyan',
    justifyContent:'center',
    alignItems:'center',
    height:60,
    //paddingTop:15,
    shadowColor: '#000',
    shadowOffset:{width:0,height:4},
    shadowOpacity:1,
    elevation:2,
    position:'relative'
  },
  textStyle:{
    fontSize:30
  }
};

export default Header;
