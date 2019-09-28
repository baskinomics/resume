import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    // Represents the flex container whose flex items are the title/dates, 
    // organization, and list items.
    entryContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: "290px",
        marginTop: "5px",
        marginBottom: "5px",
        // paddingLeft: '5px',
        // paddingRight: '5px',
    },
});

/**
 * 
 */
class EntryContainer extends React.Component {
    render() {
        return <View style={styles.entryContainer} debug={true}>{this.props.children}</View>
    }
}

export default EntryContainer;
