import React from 'react';
import { Document, Page, View, Text, Link, StyleSheet } from '@react-pdf/renderer';
import Header from './Header.js';
import Summary from './Summary.js';
import Experience from './Experience.js';
import Education from './Education.js';
import Skills from './Skills.js';
import Certifications from './Certifications.js';
import Footer from './Footer.js';

// Create styles
const styles = StyleSheet.create({
  page: {
    // margin: '0px',
    fontFamily: 'Open Sans Condensed',
    fontSize: '10pt',
    backgroundColor: '#FFFFFF',
    //width: "8.27in"
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingLeft: '10px',
    paddingRight: '10px',
    width: '100%'
    //paddingBottom: '10px',
    //height: '95%',
  },
  column: {
    width: '50%',
    padding: '10px'
  },
  footer: {
    //marginTop: '15px',
    paddingTop: '15px',
    textAlign: 'center',
    alignSelf: 'flex-end'
  }
});

// Create Document Component
const Resume = () => (
  <Document
    title="Sean Baskin - Resume"
    author="Sean Baskin"
    subject="Resume"
    keywords=""
    creator="Sean Baskin"
    producer="Sean Baskin"
    >
    <Page size="LETTER" style={ styles.page } ruler={ false } wrap={ false }>
      <View style={ styles.container }>
        <Header />
        <View style={ styles.contentContainer }>
          <View style={ styles.column }>
            <Summary />
            <Education />
            <Certifications />
          </View>
          <View style={ styles.column }>
            <Skills />
          </View>
        </View>
        <Footer style={ styles.footer }/>
      </View>
    </Page>
    <Page size="LETTER" style={ styles.page } ruler={ false } wrap={ false }>
      <Experience />
    </Page>
  </Document>
);

export default Resume;
