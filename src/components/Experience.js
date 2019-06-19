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
      {id: 1, text: "Designed and implemented microservices to automate internal workflow components and processes for client’s existing commerical SaaS offering resulting in a geometric increase in customer capacity."},
      {id: 2, text: "Technical lead for internal DevOps R&D project that containerized our commerical SaaS application and subsequent deployment using Infrastructure-as-Code, configuration management, container orchestration, and public/private cloud platforms that was later included in our product offering."},
      {id: 3, text: "Core developer for two (2)  year client project that entailed refactoring existing application from .NET to Java, implementing RESTful web services, improving ETL and analytics processes, expansive search functionality, and data modeling."},
      {id: 4, text: "Contributed to the development of business intelligence / analytics web applications utilizing NodeJS, AngularJS, and d3.js."},
      // Work around for parsing and including links - see ExperienceEntry implmentation
      // {id: 5, text: "Authored blog posts Cloud-First Microservices: AWS API Gateway and Lambda in Action</a> and <a href=\"\">Visualizing Clusters with ArcGIS for Flex</a>."}
    ]
  }
];

const styles = StyleSheet.create({
  expEntryContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px'
  },
  titleDateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header: {
    fontSize: 18,
    marginBottom: '5px',
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
        <View style={styles.descriptionItemContainer}>
          <Text style={styles.bullet}>·</Text>
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
