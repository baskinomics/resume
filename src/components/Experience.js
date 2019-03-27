import React from 'react';
import { View, Text, Link, StyleSheet } from '@react-pdf/renderer';

const experience = [
  {
    id: 0,
    title: "Software Developer",
    organization: "BNL Consulting, LLC.",
    dates: {
      begin: "April 2014",
      end: "Aug 2018"
    },
    summary: [
      {id: 0, text: "Designed, developed, or contributed to seven (7) client projects."},
      {id: 1, text: "Designed and implemented automation of various processes for client’s existing application workflow resulting in a geometric increase in customer capacity for their commerical service offering."},
      {id: 2, text: "Technical lead for internal research project that containerized existing client application and subsequent deployment using Infrastructure-as-Code, configuration management, container orchestration, and public/private cloud platforms."},
      {id: 3, text: "Core developer for two (2)  year client project that entailed refactoring existing application from .NET to Java, implementing RESTful web services, improving ETL and analytics processes, expansive search functionality, and data modeling."},
      {id: 4, text: "Contributed to frontend development of client applications utilizing Javascript, AngularJS, d3.js, and associated tools and ecosystem."},
      {id: 5, text: "Authored blog posts <a href=\"\">Cloud-First Microservices: AWS API Gateway and Lambda in Action</a> and <a href=\"\">Visualizing Clusters with ArcGIS for Flex</a>."}
    ]
  }
];

const styles = StyleSheet.create({
  expEntryContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  titleDateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header: {
    fontSize: 18,
    marginBottom: '10px',
    fontFamily: 'Open Sans Condensed Bold'
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
  <View style={styles.descriptionItemContainer}>
    <Text style={styles.bullet}>·</Text>
    <Text>{descriptionText}</Text>
  </View>
);

const ExperienceEntry = ({ title, organization, dates, summary }) => {
  const displayDate = `${dates.begin} - ${dates.end}`;
  return (
    <View style={styles.expEntryContainer}>
      <View style={styles.titleDateContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{displayDate}</Text>
      </View>
      <Text>{organization}</Text>
      <View style={styles.listContainer}>
        {
          summary.map(e => (
            <DescriptionItem key={e.id} descriptionText={e.text} />
          ))
        }
      </View>
    </View>
  );
};

const Experience = () => (
  <View>
    <Text style={styles.header}>Experience</Text>
    {
      experience.map(({ id, title, organization, dates, summary }) => (
        <ExperienceEntry
          title={title}
          organization={organization}
          dates={dates}
          summary={summary}
          key={id}
        />
      ))
    }
  </View>
);

export default Experience;
