import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  certEntryContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    fontSize: 18,
    marginBottom: '5px',
    fontFamily: 'Open Sans Condensed Bold'
  },
  listContainer: {
    paddingTop: '5px',
    paddingLeft: '5px',
    paddingRight: '5px'
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
  <View style={styles.certItemContainer}>
    <Text style={styles.bullet}>·</Text>
    <Text>{text}</Text>
  </View>
);

const Certifications = () => (
  <View style={styles.certEntryContainer}>
    <View style={styles.listContainer}>
      {
        certifications.map(e => (
          <CertificationEntry key={e.id} text={e.text} />
        ))
      }
    </View>
  </View>
);

export default Certifications;
