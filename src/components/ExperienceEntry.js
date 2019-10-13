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
 * Component the contains work experience at BNL Consulting.
 */
const Bnl = () => {
  const dates = {
    begin: "April 2014",
    end: "Aug. 2018"
  };

  return (
    <EntryContainer>
      <ItemWithDates item="Software Developer" subitem="BNL Consulting, LLC." dates={dates} />
      <ListContainer>
        <Element>
          <Text>Designed, developed, or contributed to seven (7) client projects.</Text>
        </Element>
        <Element>
          <Text>Architected Spring Boot and AWS Lambda microservices to automate business processes for client’s existing commerical SaaS offering.</Text>
        </Element>
        <Element>
          <Text>Technical lead for R&D project that containerized our commerical SaaS application and subsequent deployment using Infrastructure-as-Code, configuration management, container orchestration, and public/private cloud platforms that was included in our product offering.</Text>
        </Element>
        <Element>
          <Text>Core developer for two (2)  year client project that entailed refactoring existing application from .NET to Java, implementing RESTful web services, improving ETL and analytics processes, expansive search functionality, and data modeling.</Text>
        </Element>
        <Element>
          <Text>Contributed to the development of business intelligence / analytics web applications utilizing NodeJS, AngularJS, and d3.js.</Text>
        </Element>
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

/** 
 * Component the contains work experience at Chattanooga Public Library.
 */
const Cpl = () => {
  const dates = {
    begin: "Feb. 2014",
    end: "April 2014"
  };

  return (
    <EntryContainer>
      <ItemWithDates
        item="Open Data Specialist"
        subitem="Chattanooga Public Library"
        dates={dates} />
      <ListContainer>
        <Element>
          <Text>Coordinated with the City of Chattanooga Mayor's Office and various departments to identify and disseminate government data to the public.</Text>
        </Element>
        <Element>
          <Text>Evaluated available data portal solutions and managed chosen platform.</Text>
        </Element>
      </ListContainer>
    </EntryContainer>
  );
};

/** 
 * Component the contains work experience as self-employed consultant.
 */
const Consultant = () => {
  const dates = {
    begin: "Jan. 2014",
    end: "Feb. 2014"
  };

  return (
    <EntryContainer>
      <ItemWithDates
        item="Consultant"
        subitem="Self-Employed"
        dates={dates} />
      <ListContainer>
        <Element>
          <Text>Configured, deployed, and designed a WordPress instance for the client.</Text>
        </Element>
        <Element>
          <Text>Exposed thematic maps for one-hundred seventy (170) miles of the Etowah River Water Trail.</Text>
        </Element>
      </ListContainer>
    </EntryContainer>
  );
};

/** 
 * Component the contains work experience related to BNL Consulting.
 */
const Cait = () => {
  const dates = {
    begin: "Aug. 2012",
    end: "Aug. 2013"
  };

  // This needs to be incorporated, better than repository alone.
  // https://www.azavea.com/blog/2013/05/24/geotrellis-enables-fast-modeling/

  // Also include the Center for Academic and Innovative Technologies (CAIT)

  return (
    <EntryContainer>
      <ItemWithDates
        item="Graduate Research Assistant"
        subitem="University of Tennessee Chattanooga"
        dates={dates} />
      <ListContainer>
        <Element>
          <Text>Contributed to the development of a <Link src="https://github.com/baskinomics/utc-geotrellis-demo">distributed geospatial web application</Link> within the context of the Thrive 2055 initiative.</Text>
        </Element>
        <Element>
          <Text>Additionally, developed an <Link src="https://github.com/baskinomics/Geo-Fi">Android application</Link> for the collection of WiFi signal strength and location data for the campus of the University of Tennessee at Chattanooga.</Text>
        </Element>
      </ListContainer>
    </EntryContainer>
  );
};

export { ExperienceEntry, Bnl, Cpl, Cait, Consultant };

