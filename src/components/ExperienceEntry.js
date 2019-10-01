import React from 'react';
import { Text, Link, StyleSheet } from '@react-pdf/renderer';
import ItemWithDates from './ItemWithDates.js';
import { ListElement, Element, ListContainer } from './UnorderedList.js';
import EntryContainer from './EntryContainer.js';

const styles = StyleSheet.create({

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
    maxWidth: "278px",
  },
});

/**
 * todo seperate the entry with links out to its own component.
 * @param {*} param0 
 */
const ExperienceEntry = ({ title, organization, dates, summary }) => (
  <EntryContainer>
    <ItemWithDates item={title} subitem={organization} dates={dates} />
    <ListContainer>
      {
        summary.map(e => (
          <ListElement key={e.id} text={e.text} />
        ))
      }
    </ListContainer>
  </EntryContainer>
);

/**
 * todo seperate the entry with links out to its own component.
 * @param {*} param0 
 */
const ExperienceEntryBnl = ({ title, organization, dates, summary }) => {
  return (
    <EntryContainer>
      <ItemWithDates item={title} subitem={organization} dates={dates} />
      <ListContainer>
        {
          summary.map(e => (
            <ListElement key={e.id} text={e.text} />
          ))
        }
        <Element>
          <Text>
            Authored blog posts&nbsp;
              <Link src="http://bnlconsulting.com/blog/cloud-first/">Cloud-First Microservices: AWS API Gateway and Lambda in Action</Link>
            &nbsp;and&nbsp;
              <Link src="http://bnlconsulting.com/blog/visualizing-clusters-with-arcgis-for-flex/">Visualizing Clusters with ArcGIS for Flex</Link>.
            </Text>
        </Element>
      </ListContainer>
    </EntryContainer>
  );
};

export { ExperienceEntry, ExperienceEntryBnl };

