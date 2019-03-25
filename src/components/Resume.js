import React from 'react';
import { Document, Page, View, Text, Link, StyleSheet } from '@react-pdf/renderer';
import Header from './Header.js';

// Create styles
const styles = StyleSheet.create({
  page: {
    margin: '0px',
    fontFamily: 'Fira Code',
    fontSize: '10pt',
    backgroundColor: '#FFFFFF',
    //width: '100%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '5px'
  },
  leftColumn: {  },
  rightColumn: {  },
  footer: {
    padding: '5px',
    textAlign: 'center'
  }
});

// Create Document Component
const Resume = () => (
  <Document title="Sean Baskin - Resume">
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <Header />
        <View style={styles.contentContainer}>
          <View style={styles.leftColumn}>
            <Text>Left Column</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text>Right Column</Text>
          </View>
        </View>
        <Text style={styles.footer}>Made with &#128420; using React</Text>
      </View>
    </Page>
  </Document>
);

export default Resume;
