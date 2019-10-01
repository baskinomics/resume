import React from 'react';
import ItemWithDates from './ItemWithDates.js';
import { Text, Link, StyleSheet } from '@react-pdf/renderer';
import { ListElement, Element, ListContainer } from './UnorderedList.js';
import EntryContainer from './EntryContainer.js';

import * as experience from '../../data/Experience.js';

const ss = experience.experiencePageTwo.filter(e => e.id === 4);

const SecondSite = () => (
    <EntryContainer>
        <ItemWithDates item={ss['title']} subitem={ss['organization']} dates={ss['dates']} />
        <ListContainer>
            <Element>
                <Text>Provided consulting services to SecondSite, LLC and the SimCenter Enterprise for Disaster Mitigation Plume/Evacuation Scenario Modeling as part of the U.S. Ignite Initiative.</Text>
            </Element>
            <Element>
                <Text>Developed custom <Link src="https://github.com/baskinomics/LiDAR-Urban-Mesh">ETL processes</Link> and three-dimensional mesh artifacts from high-precision urban LiDAR datasets.</Text>
            </Element>
        </ListContainer>
    </EntryContainer>
);

export default SecondSite;