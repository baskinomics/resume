import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  skillEntryContainer: {
    display: 'flex',
    flexDirection: 'column',
    // marginLeft: '10px',
    marginBottom: '10px',
    maxWidth: '50%',
  },
  skillEntryHeader: {
    marginBottom: '2px',
    fontSize: 12,
    fontFamily: 'Open Sans Condensed Bold',
  }
});

const SkillsEntry = ({ skill, items }) => (
  <View style={ styles.skillEntryContainer } debug={ true }>
    <Text style={ styles.skillEntryHeader }>{ skill }</Text>
    <Text>{ items.join(', ') }</Text>
  </View>
);

export default SkillsEntry;
