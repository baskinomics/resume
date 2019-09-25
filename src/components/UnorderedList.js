import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    bullet: {
        paddingRight: "5px",
        fontFamily: "Source Sans Pro Bold",
    },
    text: {
        
    },
    listElement: {
        display: "flex",
        flexDirection: "row"
    }
});

const Bullet = () => (
    <Text style={styles.bullet}>·</Text>
);

/**
 * 
 * @param {*} param0 
 */
const ListElement = ({ text }) => (
    <View style={styles.listElement}>
        <Bullet />
        <Text style={styles.text}>{text}</Text>
    </View>
);

export { Bullet, ListElement };
// export default ListElement;