/**
 * @module components/Education
 */

import React from 'react';
import { View, Link, Text, StyleSheet } from '@react-pdf/renderer';
import ItemWithDates from './ItemWithDates.js';
import { Bullet, ListElement, Element, ListContainer } from './UnorderedList.js';
import EntryContainer from './EntryContainer.js';

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
      { id: 1, text: "Graduate Research Assistant for four (4) semesters." }
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
      { id: 0, text: "Engaged in directed research under Dr. Bruce Ralston on advanced web mapping techniques including map classification functions, customized user interfaces, and developing data services." },
      { id: 1, text: "Tutor at the UTK Math Tutorial Center." }
    ],
    level: "post-secondary"
  }
];

/**
 * todo Split this into small components
 * @param {*} param0 
 */
const EducationEntry = ({ degree, dates, institution, summary, level }) => {
  if (level === "postgraduate") {
    return (
      <EntryContainer>
        <ItemWithDates item={degree} subitem={institution} dates={dates} />
        <ListContainer>
          {
            summary.map(e => (
              <ListElement key={e.id} text={e.text} />
            ))
          }
        </ListContainer>
      </EntryContainer>
    )
  } else {
    // todo replace desc item container view
    return (
      <EntryContainer>
        <ItemWithDates item={degree} subitem={institution} dates={dates} />
        <ListContainer>
          <Element>
            <Text>
              <Link src="http://utkgeographyblog.blogspot.com/2011/03/congratulations-to-our-geography.html">Award recipient</Link>
              &nbsp;at the <Link src="https://eureca.utk.edu/">Exhibition of Undergraduate Research and Creative Achievement (EURéCA)</Link>.
            </Text>
          </Element>
          <Element>
            <Text>
              Engaged in directed research under <Link src="https://gitlab.com/baskinomics/resume/blob/master/data/docs/Letter-of-Reference-Bruce-Ralston.pdf">Dr. Bruce Ralston</Link> on
              advanced web mapping techniques including map classification functions, customized user interfaces, and developing data services.
            </Text>
          </Element>
          {
            summary
              .filter(e => e.id === 1)
              .map(e => (
                <ListElement key={e.id} text={e.text} />
              ))
          }
        </ListContainer>
      </EntryContainer>
    )
  }
};

/**
 * 
 */
const Education = () => (
  education.map(({ id, degree, institution, dates, summary, level }) => (
    <EducationEntry
      key={id}
      degree={degree}
      institution={institution}
      dates={dates}
      summary={summary}
      level={level}
    />
  )));

/**
 * 
 */
export default Education;
