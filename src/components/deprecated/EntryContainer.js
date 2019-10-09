import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { COLUMN_WIDTH } from '../../Attributes.js';
const styles = StyleSheet.create({
    // Represents the flex container whose flex items are the title/dates, 
    // organization, and list items.
    entryContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: `${COLUMN_WIDTH}px`,
        marginTop: "2px",
        marginBottom: "5px",
        paddingLeft: "5px",
        paddingRight: "5px",
    },
});

/**
 * 
 */
class EntryContainer extends React.Component {
    render() {
        return <View style={styles.entryContainer} debug={false}>{this.props.children}</View>
    }
}

export default EntryContainer;
