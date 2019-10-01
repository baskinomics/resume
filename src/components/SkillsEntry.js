import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import EntryContainer from './EntryContainer.js';
import SectionHeader from './SectionHeader.js';

const SkillsEntry = ({ skill, items }) => {
  return (
    <View>
      <SectionHeader size="2" text={skill} />
      <EntryContainer>
        <Text>{items.join(', ')}</Text>
      </EntryContainer>
    </View>
  )
};

export default SkillsEntry;
