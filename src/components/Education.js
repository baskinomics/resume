/**
 * @module components/Education
 */

import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

/**
 * todo fix spacing on educationContainer flex items
 */
const styles = StyleSheet.create({
  // Represents the flex container whose flex items are EducationEntry 
  // components.
  educationContainer: {
    width: '50%',
    height: '175px',
    marginTop: "5px",
    marginBottom: "5px",
    paddingLeft: '5px',
    paddingRight: '5px',
    justifyContent: 'space-between',
  },
  // Represents the flex container whose flex items are the degree/dates, 
  // institution, and list items.
  eduEntryContainer: {
    display: 'flex',
    flexDirection: 'column',
    // marginBottom: '10px'
  },
  titleDateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  degree: {
    fontFamily: 'Open Sans Condensed Bold'
  },
  listContainer: {
    // paddingTop: '5px',
    paddingLeft: '5px',
    // paddingRight: '5px'
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

const education = [
  {
    id: 0,
    degree: "Credit Hours towards \nMasters in Computer Science",
    dates: {
      begin: "Aug 2012",
      end: "Dec 2013"
    },
    institution: "University of Tennessee at Chattanooga",
    summary: []
  },
  {
    id: 1,
    degree: "Post-Baccalaureate in Computer Science",
    dates: {
      begin: "July 2011",
      end: "May 2012"
    },
    institution: "University of Tennessee at Chattanooga",
    summary: [
      {id: 0, text: "Graduate Teaching Assistant for two (2) semesters."},
      {id: 1, text: "Graduate Research Assistant for two (2) semesters."}
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Arts in Geography",
    dates: {
      begin: "Aug 2007",
      end: "May 2011"
    },
    institution: "University of Tennessee at Knoxville",
    summary: [
      {id: 0, text: "Award recipient at the Exhibition of Undergraduate Research and Create Achievement (EURéCA)."},
      // {id: 1, text: "Contributed to the open source Census Mapping Tutorial developed by Dr. Bruce Ralston."},
      // {id: 2, text: "Presented at the East Tennessee Regional GIS Conference."},
      {id: 3, text: "Tutor at the UTK Math Tutorial Center."}
    ]
  }
];

/**
 * 
 * @param {*} param0 
 */
const ListItem = ({ descriptionText }) => (
  <View style={ styles.descriptionItemContainer } debug={ false }>
    <Text style={ styles.bullet }>·</Text>
    <Text>{ descriptionText }</Text>
  </View>
);

/**
 * 
 * @param {*} param0 
 */
const EducationEntry = ({ degree, dates, institution, summary }) => {
  const displayDate = `${dates.begin} - ${dates.end}`;
  return (
    <View style={ styles.eduEntryContainer } debug={ false }>
      <View style={ styles.titleDateContainer }>
        <Text style={ styles.degree }>{ degree }</Text>
        <Text>{ displayDate }</Text>
      </View>
      <Text>{ institution }</Text>
      <View style={ styles.listContainer }>
        {
          summary.map(e => (
            <ListItem key={ e.id } descriptionText={ e.text } />
          ))
        }
      </View>
    </View>
  )
};

/**
 * 
 */
const Education = () => (
  <View style = { styles.educationContainer } debug={ false }>
    {
      education.map(({ id, degree, institution, dates, summary }) => (
        <EducationEntry
          key={ id }
          degree={ degree }
          institution={ institution }
          dates={ dates }
          summary={ summary }
        />
      ))
    }
  </View>
);

/**
 * 
 */
export default Education;
