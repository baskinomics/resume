import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import * as attributes from '../Attributes.js';

const styles = StyleSheet.create({
    // This style effects the container element that contains all non-header
    // components, i.e. content sections.
    contentContainer: {
        // todo determine if `flexFlow` attribute is supported in ReactPDF,
        // and if so set to `flexFlow: 'column wrap'`
        display: 'flex',

        // Specifies the direction the main axis run in
        flexDirection: 'column',

        // We want the flex items to wrap in the event of an overflow
        flexWrap: 'wrap',

        // todo required? set attribute to `space-around`?
        // Controls where the flex items sit on the main axis
        //justifyContent: 'space-between',

        // todo implement
        alignItems: 'stretch',
        // paddingLeft: '10px',
        // paddingRight: '10px',
        margin: "auto",
        width: `${attributes.CONTENT_WIDTH}px`,
        height: `${attributes.CONTENT_HEIGHT}px`,
    },
});

class ContentContainer extends React.Component {
    render() {
        return <View
            style={styles.contentContainer}
            debug={true}
            wrap={false}>{this.props.children}</View>
    }
}

export default ContentContainer;