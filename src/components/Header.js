import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const LETTER_PAGE_HEIGHT = 792.0;
const HEADER_HEIGHT = LETTER_PAGE_HEIGHT * 0.1;

/**
 * 
 */
const styles = StyleSheet.create({
  
  // todo documentation
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: `${ HEADER_HEIGHT }px`,
    width: '100%',
    paddingTop: '10px',
    paddingBottom: '10px',
    color: 'white',
    backgroundColor: 'grey',
    fontSize: '28pt',
    //fontFamily: 'Merriweather',
  },
});

/**
 * 
 */
const Header = () => (
  <View style={ styles.headerContainer } debug={ false }>
    <Text>Sean M. Baskin</Text>
  </View>
);

export default Header;
