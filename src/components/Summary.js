import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  summaryContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    border: 'thick double #32a1ce'
    // marginBottom: '10px'
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
  <View style={ styles.summaryContainer }>
    <Text>{ summaryItems.join(' ') }</Text>
  </View>
);

export default Summary;
