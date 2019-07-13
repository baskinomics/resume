import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  certEntryContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    paddingLeft: '10px',
    paddingRight: '5px',
  },
  header: {
    fontSize: 18,
    marginBottom: '5px',
    fontFamily: 'Open Sans Condensed Bold'
  },
  certItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  bullet: {
    marginRight: '5px',
    fontFamily: 'Open Sans Condensed Bold'
  }
});

const certifications = [
  {
    id: 0,
    text: "AWS Certificated Developer - Associate"
  },
  {
    id: 1,
    text: "Adobe Certified Expert Flex 4.5"
  }
];

const CertificationEntry = ({ text }) => (
  <View style={ styles.certItemContainer }>
    <Text style={ styles.bullet }>·</Text>
    <Text>{text}</Text>
  </View>
);

const Certifications = () => (
  <View style={ styles.certEntryContainer } debug={ false }>
    {
      certifications.map(e => (
        <CertificationEntry key={ e.id } text={ e.text } />
      ))
    }
  </View>
);

export default Certifications;
