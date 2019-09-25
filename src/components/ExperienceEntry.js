import React from 'react';
import { View, Text, Link, StyleSheet } from '@react-pdf/renderer';
import ItemWithDates from './ItemWithDates.js'
import { Bullet, ListElement } from './UnorderedList.js'

const styles = StyleSheet.create({

  // Represents the flex container whose flex items are the title/dates, 
  // organization, and list items.
  expEntryContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: "50%",
    marginTop: "5px",
    marginBottom: "5px",
    paddingLeft: '5px',
    // paddingRight: '5px',
  },

  // todo documentation
  listContainer: {
    paddingTop: '3px',
    paddingLeft: '5px',
    // maxWidth: '95%',
  },

  // Represents the flex container whose flex items are the bullet and
  // item text.
  descriptionItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'flex-start',
    // maxWidth: '95%',
  },
});

/**
 * todo seperate the entry with links out to its own component.
 * @param {*} param0 
 */
export const ExperienceEntry = ({ title, organization, dates, summary }) => (
  <View style={styles.expEntryContainer} debug={false}>
    <ItemWithDates item={title} subitem={organization} dates={dates} />
    <View style={styles.listContainer} debug={false}>
      {
        summary.map(e => (
          <ListElement key={e.id} text={e.text} />
        ))
      }
    </View>
  </View>
);

/**
 * todo seperate the entry with links out to its own component.
 * @param {*} param0 
 */
export const ExperienceEntryBnl = ({ title, organization, dates, summary }) => {
  return (
    <View style={styles.expEntryContainer} debug={false}>
      <ItemWithDates item={title} subitem={organization} dates={dates} />
      <View style={styles.listContainer}>
        {
          summary.map(e => (
            <ListElement key={e.id} text={e.text} />
          ))
        }
        <View style={styles.descriptionItemContainer}>
          <Bullet />
          <View>
            <Text>
              Authored blog posts&nbsp;
              <Link src="http://bnlconsulting.com/blog/cloud-first/">Cloud-First Microservices: AWS API Gateway and Lambda in Action</Link>
              &nbsp;and&nbsp;
              <Link src="http://bnlconsulting.com/blog/visualizing-clusters-with-arcgis-for-flex/">Visualizing Clusters with ArcGIS for Flex</Link>.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExperienceEntry;
