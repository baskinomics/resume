import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { COLUMN_WIDTH } from '../Attributes.js';

const styles = StyleSheet.create({
  skillEntryContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: `${COLUMN_WIDTH}px`,
    // marginTop: "5px",
    // marginBottom: "5px",
    // paddingLeft: '5px',
    // paddingRight: '5px',
  },
  skillEntryHeader: {
    marginBottom: '2px',
    fontSize: "12pt",
  }
});

const SkillsEntry = ({ skill, items }) => (
  <View style={styles.skillEntryContainer} debug={false}>
    <Text style={styles.skillEntryHeader}>{skill}</Text>
    <Text>{items.join(', ')}</Text>
  </View>
);

export default SkillsEntry;
