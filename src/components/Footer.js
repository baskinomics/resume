import React from 'react';
import { View, Text, Link, StyleSheet } from '@react-pdf/renderer';
import { version } from '../../package.json';

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    paddingTop: '50px',
  },
  footerText: {
    fontFamily: 'Hasklug',
    fontSize: '6pt',
    textAlign: 'center',
    // paddingTop: '125px',
    // alignSelf: 'flex-end'
  }
});

const Footer = () => (
  <View style={ styles.footContainer }>
    <Text style={ styles.footerText }>
      <Link src="https://github.com/baskinomics/resume">{ "v" + version }</Link>
    </Text>
  </View>
);

export default Footer;
