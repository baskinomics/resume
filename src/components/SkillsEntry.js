import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { COLUMN_WIDTH } from '../Attributes.js';
import EntryContainer from './EntryContainer.js';

const styles = StyleSheet.create({
  // todo move this into module w/ header components
  skillEntryHeader: {
    marginBottom: '2px',
    fontSize: "12pt",
  }
});

const SkillsEntry = ({ skill, items }) => (
  <EntryContainer>
    <Text style={styles.skillEntryHeader}>{skill}</Text>
    <Text>{items.join(', ')}</Text>
  </EntryContainer>
);

export default SkillsEntry;
