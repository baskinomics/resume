import React from 'react';
import { ListElement, ListContainer } from './UnorderedList.js';
import EntryContainer from './EntryContainer.js';

/**
 * todo Add icon to this object.
 * todo documentation
 */
const certifications = [
  {
    id: 0,
    text: "AWS Certificated Developer - Associate"
  },
  {
    id: 1,
    text: "Adobe Certified Expert Flex 4.5"
  }
];

/**
 * todo documentation
 */
const Certifications = () => (
  <EntryContainer>
    <ListContainer>
      {
        certifications.map(e => (
          <ListElement key={e.id} text={e.text} />
        ))
      }
    </ListContainer>
  </EntryContainer>
);

export default Certifications;
