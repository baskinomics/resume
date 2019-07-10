import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  summaryContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px'
  },
  header: {
    fontSize: 18,
    marginBottom: '5px',
    fontFamily: 'Open Sans Condensed Bold'
  }
});

const summaryItems = [
  "Experienced software engineer and consultant with a background in computer science, geographic information science, and mathematics.",
  // "I develop enterprise Java and Spring web applications and am passionate about the work I engage in.",
  // "That passion has driven varied interests that I have incorporated into my professional portfolio ranging from the core Amazon Web Services to a healthy dose of DevOps tools and practices.",
  "Creative yet pragmatic in development and implementation, as well as problem resolution.",
  "Excellent written and oral communication skills and interpersonal dynamics, with proven ability to effectively use those skills to ensure transparency and agreement between technical and non-technical stakeholders.",
  "Engaged and knowledgeable individual that is goal-oriented, proactive, and effectual.",
  // "I live in Linux and I also like maps, mathematics, and other programming languages!"
];

// Create Document Component
const Summary = () => (
  <View style={styles.summaryContainer}>
    <Text style={styles.header}>Summary</Text>
    <Text>{summaryItems.join(' ')}</Text>
  </View>
);

export default Summary;
