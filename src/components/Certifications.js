import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { ListElement } from './UnorderedList.js'

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
    //// fontFamily: 'Source Sans Pro Bold'
  },
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
 * todo documentation
 */
const Certifications = () => (
  <View style={styles.certEntryContainer} debug={false}>
    {
      certifications.map(e => (
        <ListElement key={e.id} text={e.text} />
      ))
    }
  </View>
);

/**
 * todo documentation
 */
export default Certifications;
