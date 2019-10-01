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

class CustomExperienceEntry extends React.Component {
  render() {
    return <EntryContainer>
      <ItemWithDates item={this.props.title} subitem={this.props.organization} dates={this.props.dates} />
      <ListContainer>{this.props.children}</ListContainer>
    </EntryContainer>
  }
};

export { ExperienceEntry, CustomExperienceEntry };
