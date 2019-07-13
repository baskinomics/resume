import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    sectionHeader: {
        fontSize: 18,
        marginTop: '5px',
        marginBottom: '5px',
        fontFamily: 'Open Sans Condensed Bold',
        maxWidth: '50%',
    }
});

const SectionHeader = ({ value }) => (
    <Text style={ styles.sectionHeader } debug={ true }>{ value }</Text>
);

export default SectionHeader;
