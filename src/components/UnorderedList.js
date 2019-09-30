import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { COLUMN_WIDTH } from '../Attributes.js';

const styles = StyleSheet.create({
    bullet: {
        paddingRight: "5px",
        fontFamily: "Source Sans Pro Bold",
    },
    listElement: {
        display: "flex",
        flexDirection: "row"
    },
    listContainer: {
        display: "flex",
        flexDirection: "column",
        width: `${COLUMN_WIDTH}px`,
        // marginTop: "5px",
        // marginBottom: "5px",
        // paddingLeft: "10px",
        // paddingRight: "5px",
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

class ListContainer extends React.Component {
    render() {
        return <View debug={false}>{this.props.children}</View>;
    }
}

export { Bullet, ListElement, ListContainer };
// export default ListElement;