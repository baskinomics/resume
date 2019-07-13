import React from 'react';
import { Document, Page, View, Text, Link, StyleSheet } from '@react-pdf/renderer';
import Header from './Header.js';
import Summary from './Summary.js';
import Experience from './Experience.js';
import Education from './Education.js';
import Certifications from './Certifications.js';
import Footer from './Footer.js';
import SectionHeader from './SectionHeader.js';
import skills from '../data/Skills.js';
import SkillsEntry from './SkillsEntry.js';

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Open Sans Condensed',
    fontSize: '10pt',
    backgroundColor: '#FFFFFF',
  },
  // This element is the parent element of the children elements that are
  // flexible boxes. Specifically this is our flex container and the flex
  // attributes effect the flex items. This element is a container that
  // contains all subsequent components in the resume.
  container: {
    display: 'flex',
    // Specifies the direction the main axis run in
    flexDirection: 'column',
    // Controls where the flex items sit on the main axis
    // justifyContent: 'center',
    width: '100%',
    height: '100%'
  },

  // Header Styles
  header: {
    height: '10%',
  },

  // This style effects the container element that contains all non-header
  // components, i.e. content sections.
  contentContainer: {
    // todo determine if `flexFlow` attribute is supported in ReactPDF,
    // and if so set to `flexFlow: 'column wrap'`
    display: 'flex',
    
    // Specifies the direction the main axis run in
    flexDirection: 'column',
    
    // We want the flex items to wrap in the event of an overflow
    flexWrap: 'wrap',
    
    // todo required? set attribute to `space-around`?
    // Controls where the flex items sit on the main axis
    //justifyContent: 'space-between',
   
    // todo implement
    // alignItems: 
    
    paddingLeft: '10px',
    paddingRight: '10px',
    width: '100%',
    height: '85%',
    //paddingBottom: '10px',
    //height: '95%',
  },

  // todo This style should be removed and the attribute `flex: <value>` 
  // should be added to the appropriate flex items.
  // column: {
  //   width: '50%',
  //   padding: '10px'
  // },
  footer: {
    width: '100%',
    height: '5%',
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
        <Header style={ styles.header } />
        <View style={ styles.contentContainer }>
          <SectionHeader value="Summary" />
          <Summary />
          <SectionHeader value="Education" />
          <Education />
          <SectionHeader value="Certifications" />
          <Certifications />
          <SectionHeader value="Skills" />
          {
            skills.map(e => (
              <SkillsEntry
                key={ e.id }
                skill={ e.skill }
                items={ e.items }
              />
            ))
          }
        </View>
        <Footer style={ styles.footer } />
      </View>
    </Page>
  </Document>
);

export default Resume;
