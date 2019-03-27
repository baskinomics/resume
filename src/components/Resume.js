import React from 'react';
import { Document, Page, View, Text, Link, StyleSheet } from '@react-pdf/renderer';
import Header from './Header.js';
import Summary from './Summary.js';
import Experience from './Experience.js';
import Skills from './Skills.js';
import Certifications from './Certifications.js';

// Create styles
const styles = StyleSheet.create({
  page: {
    margin: '0px',
    fontFamily: 'Open Sans Condensed',
    fontSize: '11pt',
    backgroundColor: '#FFFFFF'
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
    padding: '10px',
    height: '100%'
  },
  column: {
    width: '50%',
    padding: '10px'
  },
  footer: {
    padding: '5px',
    textAlign: 'center',
    alignSelf: 'flex-end'
  }
});

// Create Document Component
const Resume = () => (
  <Document title="Sean Baskin - Resume">
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <Header />
        <View style={styles.contentContainer}>
          <View style={styles.column}>
            <Summary />
            <Experience />
          </View>
          <View style={styles.column}>
            <Skills />
            <Certifications />
          </View>
        </View>
        <Text style={styles.footer}>Made with 🖤 using React</Text>
      </View>
    </Page>
  </Document>
);

export default Resume;
