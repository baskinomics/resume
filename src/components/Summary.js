import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  summaryContainer: {
    width: '50%',
    marginTop: "5px",
    marginBottom: "5px",
    paddingLeft: '5px',
    paddingRight: '5px'
  },
});

const summaryItems = [
  "Experienced software engineer and consultant with a background in computer science, geographic information science, and mathematics.",
  "Creative yet pragmatic in development and implementation, as well as problem resolution.",
  "Excellent written and oral communication skills and interpersonal dynamics, with proven ability to effectively use those skills to ensure transparency and agreement between technical and non-technical stakeholders.",
  "Engaged and knowledgeable individual that is goal-oriented, proactive, and effectual.",
];

// Declare Summary Component
const Summary = () => (
    <Text style={ styles.summaryContainer } debug={ false }>{ summaryItems.join(' ') }</Text>
);

export default Summary;
