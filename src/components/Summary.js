import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  summaryContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  headerTwo: {
    fontSize: 18,
    marginBottom: '5px'
  }
});

const summaryText = "I develop enterprise Java and Spring web applications and \
am passionate about the work I engage in. That passion has driven varied \
interests that I have incorporated into my professional portfolio ranging from \
the core Amazon Web Services product offerings, the Docker platform, and a \
healthy dose of DevOps tools and practices. Goal-oriented with a focus on the \
entire software development cycle. Oh, I also like maps and mathematics.";

// Create Document Component
const Summary = () => (
  <View>
    <Text style={styles.headerTwo}>Summary</Text>
    <Text>{summaryText}</Text>
  </View>
);

export default Summary;
