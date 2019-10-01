import React from 'react';
import { Text } from '@react-pdf/renderer';
import EntryContainer from './EntryContainer.js';

const summaryItems = [
  "Experienced polyglot software engineer and consultant with a background in computer science, geographic information science, and mathematics.",
  "Creative yet pragmatic in development and implementation, as well as problem resolution.",
  "Excellent written and oral communication skills and interpersonal dynamics, with proven ability to effectively use those skills to ensure transparency and agreement between technical and non-technical stakeholders.",
  "Engaged and knowledgeable individual that is goal-oriented, proactive, and effectual.",
];

// Declare Summary Component
const Summary = () => (
  <EntryContainer>
    <Text debug={false}>{summaryItems.join(' ')}</Text>
  </EntryContainer>
);

export default Summary;
