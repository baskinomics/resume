/**
 * @module components/Education
 */

import React from 'react';
import { View, Link, Text, StyleSheet } from '@react-pdf/renderer';

/**
 * todo fix spacing on educationContainer flex items
 */
const styles = StyleSheet.create({

  // Represents the flex container whose flex items are EducationEntry 
  // components.
  educationContainer: {
    width: "290px",
    // marginTop: "5px",
    // marginBottom: "5px",
    paddingLeft: '5px',
    paddingRight: '5px',
  },

  // Represents the flex container whose flex items are the degree/dates, 
  // institution, and list items.
  eduEntryContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '5px',
    marginBottom: '5px',
    justifyContent: 'space-between'
  },

  // Represents the flex container whose flex items are the degree and 
  // dates.
  titleDateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: "1px",
  },

  // todo documentation
  degree: {
    fontFamily: 'Lato Bold',
    // fontSize: '8pt',
  },

  // todo documentation
  institution: {

  },

  // Represents the flex container whose flex items are list items.
  listContainer: {
    paddingTop: '3px',
    paddingLeft: '5px',
    // paddingRight: '5px',
    maxWidth: '90%',
  },

  // Represents the flex container whose flex items are the bullet
  // list item description
  descriptionItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },

  // Represents a bullet point
  bullet: {
    marginRight: '5px',
    fontFamily: 'Merriweather Sans Bold'
  },
});

const education = [
  {
    id: 0,
    degree: "Credit Hours towards \nMasters in Computer Science",
    dates: {
      begin: "Aug. 2012",
      end: "Dec 2013"
    },
    institution: "University of Tennessee Chattanooga",
    summary: [
      { id: 0, text: "Graduate Teaching Assistant for two (2) semesters." },
      { id: 1, text: "Graduate Research Assistant for two (4) semesters." }
    ],
    level: "postgraduate"
  },
  {
    id: 1,
    degree: "Post-Baccalaureate in Computer Science",
    dates: {
      begin: "July 2011",
      end: "May 2012"
    },
    institution: "University of Tennessee Chattanooga",
    summary: [],
    level: "postgraduate"
  },
  {
    id: 2,
    degree: "Bachelor of Arts in Geography",
    dates: {
      begin: "Aug. 2007",
      end: "May 2011"
    },
    institution: "University of Tennessee Knoxville",
    summary: [
      // Add link: http://utkgeographyblog.blogspot.com/2011/03/congratulations-to-our-geography.html
      //           https://eureca.utk.edu/wp-content/uploads/sites/32/2013/08/2011-43.jpg
      // { id: 0, text: "Award recipient at the Exhibition of Undergraduate Research and Creative Achievement (EURéCA)." },
      { id: 1, text: "Engaged in directed research under Dr. Bruce Ralston on advanced web mapping techniques including map classification functions, customized user interfaces, and developing data services." },
      { id: 3, text: "Tutor at the UTK Math Tutorial Center." }
    ],
    level: "post-secondary"
  }
];

/**
 * 
 * @param {*} param0 
 */
const ListItem = ({ descriptionText }) => (
  <View style={styles.descriptionItemContainer} debug={false}>
    <Text style={styles.bullet}>·</Text>
    <Text>{descriptionText}</Text>
  </View>
);

// const UtkEntry = () ==> {
// };

/**
 * todo Split this into small components
 * @param {*} param0 
 */
const EducationEntry = ({ degree, dates, institution, summary, level }) => {
  const displayDate = `${dates.begin} - ${dates.end}`;

  if (level === "postgraduate") {
    return (
      <View style={ styles.eduEntryContainer } debug={ false }>
        <View style={ styles.titleDateContainer }>
          <Text style={ styles.degree }>{ degree }</Text>
          <Text>{ displayDate }</Text>
        </View>
        <Text style={ styles.institution }>{institution}</Text>
        <View style={styles.listContainer}>
          {
            summary.map(e => (
              <ListItem key={e.id} descriptionText={e.text} />
            ))
          }
        </View>
      </View>
    )
  } else {
    return (
      <View style={styles.eduEntryContainer} debug={ false }>
        <View style={styles.titleDateContainer}>
          <Text style={styles.degree}>{degree}</Text>
          <Text>{displayDate}</Text>
        </View>
        <Text>{institution}</Text>
        <View style={styles.listContainer}>
          <View style={styles.descriptionItemContainer}>
            <Text style={styles.bullet}>·</Text>
            <View>
              <Text>
                <Link src="http://utkgeographyblog.blogspot.com/2011/03/congratulations-to-our-geography.html">Award recipient</Link>
                &nbsp;at the Exhibition of Undergraduate Research and Creative Achievement (EURéCA).
                </Text>
            </View>
          </View>
          {
            summary.map(e => (
              <ListItem key={e.id} descriptionText={e.text} />
            ))
          }
        </View>
      </View>
    )
  }
};

/**
 * 
 */
const Education = () => (
  <View style={styles.educationContainer} debug={false}>
    {
      education.map(({ id, degree, institution, dates, summary, level }) => (
        <EducationEntry
          key={id}
          degree={degree}
          institution={institution}
          dates={dates}
          summary={summary}
          level={level}
        />
      ))
    }
  </View>
);

/**
 * 
 */
export default Education;
