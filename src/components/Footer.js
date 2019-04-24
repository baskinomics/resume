import React from 'react';
import { View, Text, Link, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%'
  },
  footerText: {
    fontSize: '8pt',
    textAlign: 'right',
    paddingTop: '125px',
    // alignSelf: 'flex-end'
  }
});

const Footer = () => (
  <View style={styles.footContainer}>
    <Text style={styles.footerText}>This <Link src="https://github.com/baskinomics/resume">resume</Link> was crafted by hand using React&nbsp;&nbsp; ;)</Text>
  </View>
);

export default Footer;
