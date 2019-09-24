import React from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    // Represents the flex container whose flex items are the title/dates, 
    // organization, and list items.
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: "50%",
        marginTop: "5px",
        marginBottom: "5px",
        paddingLeft: '5px',
        // paddingRight: '5px',
    },
    // todo documentation
    itemWithDateContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "1px",
    },
    itemText: {
        fontFamily: "Source Sans Pro Bold",
    }
});

/**
 * 
 * @param {*} param0 
 */
const Item = ({ text }) => (
    <Text style={styles.itemText}>{text}</Text>
);

/**
 * 
 * @param {*} param0 
 */
const DisplayDate = ({ displayDate }) => (
    <Text>{displayDate}</Text>
);

/**
 * 
 * @param {*} param0 
 */
const SubItem = ({ text }) => (
    <Text>{text}</Text>
);

/**
 * 
 * @param {*} param0 
 */
const ItemWithDates = ({ item, subitem, displayDate }) => (
    <View style={styles.container}>
        <View style={styles.itemWithDateContainer}>
            <Item text={item} />
            <DisplayDate displayDate={displayDate} />
        </View>
        <SubItem text={subitem} />
    </View>
);

export default ItemWithDates;
