import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%'
  },
  footerText: {
    fontSize: '8pt',
    textAlign: 'center',
    paddingTop: '25px',
    // alignSelf: 'flex-end'
  }
});

const Footer = () => (
  <View style={styles.footContainer}>
    <Text style={styles.footerText}>This resume was crafted by hand using React&nbsp;&nbsp; ;)</Text>
  </View>
);

export default Footer;
