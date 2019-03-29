import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  eduEntryContainer: {
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
    marginBottom: '10px',
    fontFamily: 'Open Sans Condensed Bold'
  },
  degree: {
    fontFamily: 'Open Sans Condensed Bold'
  }
});

// TODO Add description items
// [RA, TA]
// [EUREKA, Math Tutorial Center, Directed Study]
const education = [
  {
    id: 0,
    degree: "Credit Hours towards \nM.S. in Computer Science",
    dates: {
      begin: "Aug 2011",
      end: "Dec 2013"
    },
    institution: "University of Tennessee at Chattanooga",
    summary: [
      "Graduate Teaching Assistant for two (2) semesters",
      "Graduate Research Assistant for two (2) semesters",

    ]
  },
  {
    id: 1,
    degree: "Post-Baccalaureate in Computer Science",
    dates: {
      begin: "July 2011",
      end: "May 2012"
    },
    institution: "University of Tennessee at Chattanooga",
    summary: []
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
      "Award winner at the 2011 Exhibition of Undergraduate Research and Create Achievement (EURéCA)",
      "Contributed to the open source Census Mapping Tutorial developed by Dr. Bruce Ralston",
      "Presented at the East Tennessee Regional GIS Conference",
      "Tutor at the UTK Math Tutorial Center"
    ]
  }
];

const EducationEntry = ({ degree, institution, dates }) => {
  const displayDate = `${dates.begin} - ${dates.end}`;
  return (
    <View style={styles.eduEntryContainer}>
      <View style={styles.titleDateContainer}>
        <Text style={styles.degree}>{degree}</Text>
        <Text>{displayDate}</Text>
      </View>
      <Text>{institution}</Text>
    </View>
  )
};

const Education = () => (
  <View>
    <Text style={styles.header}>Education</Text>
    {
      education.map(({ id, degree, institution, dates }) => (
        <EducationEntry
          key={id}
          degree={degree}
          institution={institution}
          dates={dates}
        />
      ))
    }
  </View>
);

export default Education;
