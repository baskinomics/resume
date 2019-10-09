import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    // Represents the flex container whose flex items are the item, subitems, and dates.
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    // Represents the flex container whose flex items are the item and the dates.
    itemWithDateContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    // The styles for the item.
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
const ItemWithDates = ({ item, subitem, dates }) => {
    const displayDate = `${dates.begin} - ${dates.end}`;
    return (
        <View style={styles.container} debug={false}>
            <View style={styles.itemWithDateContainer}>
                <Item text={item} />
                <DisplayDate displayDate={displayDate} />
            </View>
            <SubItem text={subitem} />
        </View>
    );
};

export default ItemWithDates;
