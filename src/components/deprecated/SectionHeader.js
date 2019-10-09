import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { COLUMN_WIDTH } from '../../Attributes.js';



const styles = StyleSheet.create({
    container: {
        width: "100%",
        maxWidth: `${COLUMN_WIDTH}px`,
        // marginTop: "5px",
        // marginBottom: "2px",
        paddingLeft: "5px",
        paddingRight: "5px",
    },
    h1: {
        fontSize: "18pt",
    },
    h2: {
        // marginBottom: "2px",
        fontSize: "12pt",
    }
});

const SectionHeader = ({ size, text }) => (
    <View style={styles.container} debug={false}>
        <Text style={styles[`h${size}`]} debug={false}>{text}</Text>
    </View>
);

export default SectionHeader;
