import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  skillEntryContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    marginBottom: '10px',
    paddingLeft: '5px',
    paddingRight: '5px',
    
  },
  skillEntryHeader: {
    marginBottom: '2px',
    fontSize: 12,
    fontFamily: 'Open Sans Condensed Bold',
  }
});

const SkillsEntry = ({ skill, items }) => (
  <View style={ styles.skillEntryContainer } debug={ false }>
    <Text style={ styles.skillEntryHeader }>{ skill }</Text>
    <Text>{ items.join(', ') }</Text>
  </View>
);

export default SkillsEntry;
