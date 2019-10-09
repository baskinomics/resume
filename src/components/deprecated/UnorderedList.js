import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { COLUMN_WIDTH } from '../../Attributes.js';

const styles = StyleSheet.create({
    bullet: {
        paddingRight: "5px",
        fontFamily: "Source Sans Pro Bold",
    },
    text: {
        // width: "162px",
        maxWidth: "278px",
    },
    listElement: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "278px",
    },
    listContainer: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "286px",
        // marginTop: "5px",
        // marginBottom: "5px",
        // paddingLeft: "10px",
        // paddingRight: "5px",
    }
});

const Bullet = () => (
    <Text style={styles.bullet} debug={false}>·</Text>
);

/**
 * 
 * @param {*} param0 
 */
const ListElement = ({ text }) => (
    <View style={styles.listElement} debug={false}>
        <Bullet />
        <Text style={styles.text} debug={false}>{text}</Text>
    </View>
);

class Element extends React.Component {
    render() {
        return <View style={styles.listElement} debug={false}>
            <Bullet />
            {this.props.children}
        </View>;
    }
}


class ListContainer extends React.Component {
    render() {
        return <View style={styles.listContainer} debug={false}>{this.props.children}</View>;
    }
}

export { Bullet, ListElement, Element, ListContainer };
// export default ListElement;