import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

/**
 * todo documentation
 */
const styles = StyleSheet.create({
  certEntryContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    marginTop: "5px",
    marginBottom: "5px",
    paddingLeft: '10px',
    paddingRight: '5px',
  },
  header: {
    fontSize: 18,
    marginBottom: '5px',
    //fontFamily: 'Source Sans Pro Bold'
  },
  certItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  bullet: {
    marginRight: '5px',
    //fontFamily: 'Source Sans Pro Bold'
  }
});

/**
 * todo Add icon to this object.
 * todo documentation
 */
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

/**
 * todo Preppend icon to each entry. 
 * @param {*} param0 
 */
const CertificationEntry = ({ text }) => (
  <View style={ styles.certItemContainer }>
    <Text style={ styles.bullet }>·</Text>
    <Text>{ text }</Text>
  </View>
);

/**
 * todo documentation
 */
const Certifications = () => (
  <View style={ styles.certEntryContainer } debug={ false }>
    {
      certifications.map(e => (
        <CertificationEntry key={ e.id } text={ e.text } />
      ))
    }
  </View>
);

/**
 * todo documentation
 */
export default Certifications;
