import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    sectionHeader: {
        width: "50%",
        marginTop: '5px',
        // marginBottom: '5px',
        paddingLeft: '5px',
        paddingRight: '5px',
        fontSize: 18,
    }
});

const SectionHeader = ({ value }) => (
    <Text style={styles.sectionHeader} debug={true}>{value}</Text>
);

export default SectionHeader;
