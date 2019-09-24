import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    title: {
        fontFamily: "Source Sans Pro Bold",
    }
});

/**
 * 
 * @param {*} param0 
 */
const Title = ({ title }) => (
    <Text style={styles.title}>{title}</Text>
);

export default Title;