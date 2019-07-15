import React from 'react';
import { View, Text, Link, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  expEntryContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    marginTop: "5px",
    marginBottom: "5px",
    paddingLeft: '5px',
    paddingRight: '5px',
  },
  titleDateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: 'Open Sans Condensed Bold'
  },
  listContainer: {
    paddingTop: '5px',
    paddingLeft: '5px',
    paddingRight: '5px'
  },
  descriptionItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  bullet: {
    //marginTop: '2px',
    marginRight: '5px',
    fontFamily: 'Open Sans Condensed Bold'
  }
});

const DescriptionItem = ({ descriptionText }) => (
  <View style={ styles.descriptionItemContainer }>
    <Text style={ styles.bullet }>·</Text>
    <Text>{descriptionText}</Text>
  </View>
);

/**
 * todo seperate the entry with links out to its own component.
 * @param {*} param0 
 */
export const ExperienceEntry = ({ title, organization, dates, summary }) => {
  const displayDate = `${dates.begin} - ${dates.end}`;
  return (
    <View style={ styles.expEntryContainer } debug={ false }>
      <View style={ styles.titleDateContainer }>
        <Text style={ styles.title }>{ title }</Text>
        <Text>{ displayDate }</Text>
      </View>
      <Text>{ organization }</Text>
      <View style={ styles.listContainer }>
        {
          summary.map(e => (
            <DescriptionItem key={ e.id } descriptionText={ e.text } />
          ))
        }
      </View>
    </View>
  );
};

/**
 * todo seperate the entry with links out to its own component.
 * @param {*} param0 
 */
export const ExperienceEntryBnl = ({ title, organization, dates, summary }) => {
  const displayDate = `${dates.begin} - ${dates.end}`;
  return (
    <View style={ styles.expEntryContainer } debug={ false }>
      <View style={ styles.titleDateContainer }>
        <Text style={ styles.title }>{ title }</Text>
        <Text>{ displayDate }</Text>
      </View>
      <Text>{ organization }</Text>
      <View style={ styles.listContainer }>
        {
          summary.map(e => (
            <DescriptionItem key={ e.id } descriptionText={ e.text } />
          ))
        }
        <View style={ styles.descriptionItemContainer }>
          <Text style={ styles.bullet }>·</Text>
          <View>
            <Text>Authored blog posts&nbsp;
            <Link src="http://bnlconsulting.com/blog/cloud-first/">Cloud-First Microservices: AWS API Gateway and Lambda in Action</Link>
            &nbsp;and&nbsp;
            <Link src="http://bnlconsulting.com/blog/visualizing-clusters-with-arcgis-for-flex/">Visualizing Clusters with ArcGIS for Flex</Link>
            .</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExperienceEntry;
