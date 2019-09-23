/**
 * @module components/Resume
 */

import React from 'react';
import { Document, Page, View, Text, Link, StyleSheet } from '@react-pdf/renderer';

// Components
import Header from './Header.js';
import Summary from './Summary.js';
import Education from './Education.js';
import Certifications from './Certifications.js';
import Footer from './Footer.js';
import SectionHeader from './SectionHeader.js';
import { ExperienceEntry, ExperienceEntryBnl } from './ExperienceEntry.js';
import SkillsEntry from './SkillsEntry.js';

// Data
import skills from '../data/Skills.js';
import * as experience from '../data/Experience.js';

// See: https://github.com/diegomura/react-pdf/blob/master/src/utils/pageSizes.js
const LETTER_PAGE_HEIGHT = 792.0;

// todo determine how to pass and set these values to respective components
const HEADER_HEIGHT = LETTER_PAGE_HEIGHT * 0.1;
const CONTENT_HEIGHT = LETTER_PAGE_HEIGHT * 0.85;
const FOOTER_HEIGHT = LETTER_PAGE_HEIGHT * 0.05;

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "Lato",
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
    height: `${ LETTER_PAGE_HEIGHT }px`
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
    alignItems: 'stretch',
    
    paddingLeft: '10px',
    paddingRight: '10px',
    width: '100%',
    height: `${ CONTENT_HEIGHT }px`,
  },
});

/**
 * @returns The full resume JSX.
 */
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
      <View style={ styles.container } debug={ false }>
        <Header />
        <View style={ styles.contentContainer } debug={ false } wrap={ false }>
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
          <SectionHeader value="Experience" />
          {
            experience.experienceBnl.map(e => (
              <ExperienceEntryBnl
                key={ e.id }
                title={ e.title }
                organization={ e.organization }
                dates={ e.dates }
                summary={ e.summary }
              />
            ))
          }
        </View>
        <Footer />
      </View>
    </Page>
    <Page size="LETTER" style={ styles.page } ruler={ false } wrap={ false }>
      <View style={ styles.container } debug={ false }>
        <Header />
        <View style={ styles.contentContainer } debug={ false } wrap={ false }>
          <SectionHeader value="Experience (cont.)" />
          {
            experience.experiencePageTwo.map(e => (
              <ExperienceEntry
                key={ e.id }
                title={ e.title }
                organization={ e.organization }
                dates={ e.dates }
                summary={ e.summary }
              />
            ))
          }
        </View>
        <View style={ styles.footer } debug={ false }>
          <Footer />
        </View>
      </View>
    </Page>
  </Document>
);

export default Resume;
