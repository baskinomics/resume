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
import ContentContainer from './ContentContainer.js';
import * as attributes from '../Attributes.js';


// Data
import skills from '../data/Skills.js';
import * as experience from '../data/Experience.js';

// Create styles
const styles = StyleSheet.create({

  // Styles for the <Page> component.
  page: {
    fontFamily: "Source Sans Pro",
    fontSize: '9pt',
    backgroundColor: '#FFFFFF',
  },

  // This element is the parent element of the children elements that are
  // flexible boxes. Specifically this is our flex container and the flex
  // attributes effect the flex items. This element is a container that
  // contains all subsequent components in the resume.
  container: {
    display: "flex",
    // Specifies the direction the main axis run in
    flexDirection: "column",
    // Controls where the flex items sit on the main axis
    // justifyContent: 'center',
    width: `${attributes.LETTER_PAGE_WIDTH}px`,
    height: `${attributes.LETTER_PAGE_HEIGHT}px`
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
    producer="Sean Baskin">
    <Page size="LETTER" style={styles.page} ruler={false} wrap={false}>
      <View style={styles.container} debug={false}>
        <Header />
        <ContentContainer>
          <SectionHeader size="1" text="Summary" />
          <Summary />
          <SectionHeader size="1" text="Education" />
          <Education />
          <SectionHeader size="1" text="Certifications" />
          <Certifications />
          <SectionHeader size="1" text="Skills" />
          {
            skills.map(e => (
              <SkillsEntry
                key={e.id}
                skill={e.skill}
                items={e.items}
              />
            ))
          }
          <SectionHeader size="1" text="Experience" />
          {
            experience.experienceBnl.map(e => (
              <ExperienceEntryBnl
                key={e.id}
                title={e.title}
                organization={e.organization}
                dates={e.dates}
                summary={e.summary}
              />
            ))
          }
        </ContentContainer>
        <Footer />
      </View>
    </Page>
    <Page size="LETTER" style={styles.page} ruler={false} wrap={false}>
      <View style={styles.container} debug={false}>
        <Header />
        <ContentContainer>
          <SectionHeader value="Experience (cont.)" />
          {
            experience.experiencePageTwo.map(e => (
              <ExperienceEntry
                key={e.id}
                title={e.title}
                organization={e.organization}
                dates={e.dates}
                summary={e.summary}
              />
            ))
          }
        </ContentContainer>
        <Footer />
      </View>
    </Page>
  </Document>
);

export default Resume;
