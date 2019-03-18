import React from 'react';
import { Font, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF'
  },
  headerText: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Fira Code'
  }
});

// Font registration
Font.register(`${__dirname}/fonts/fira-code/FiraCode-Regular.ttf`, {
  family: 'Fira Code'
})

// Create Document Component
const Resume = () => (
  <Document title="Sean Baskin - Resume">
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sean Baskin</Text>
      </View>
    </Page>
  </Document>
);

export default Resume;
