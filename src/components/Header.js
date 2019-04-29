import React from 'react';
import { View, Text, Link, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100px',
    width: '100%',
    padding: '20px',
    marginBottom: '10px',
    fontFamily: 'Open Sans Condensed Bold',
    color: 'white',
    backgroundColor: 'grey'
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    fontSize: '24pt',
    fontFamily: 'Open Sans Condensed Bold',
    justifyContent: 'center'
  },
  metaContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    paddingLeft: '85px',
    justifyContent: 'space-around',
    fontSize: '9pt',
    fontFamily: 'Open Sans Condensed Bold'
  }
});

const metaLinks = [
  {
    id: 0,
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/sean-baskin/"
  },
  {
    id: 1,
    text: "GitHub",
    href: "https://github.com/baskinomics"
  },
  {
    id: 2,
    text: "StackExchange",
    href: "https://stackexchange.com/users/944752/baskinomics"
  },
  {
    id: 3,
    text: "seanbaskin@gmail.com",
    href: "mailto:seanbaskin@gmail.com"
  },
  {
    id: 4,
    text: "(423) 580-9185",
    href: "tel:1-423-580-9185"
  }
];

const Name = () => (
  <View style={styles.nameContainer}>
    <Text>Sean</Text>
    <Text>Baskin</Text>
  </View>
);

const Meta = ({ metaLinks }) => (
  <View style={styles.metaContainer}>
    {
      // Per https://reactjs.org/docs/lists-and-keys.html#keys
      metaLinks.map(link => (
        <Link key={link.id} src={link.href}>{ link.text }</Link>
      ))
    }
  </View>
);

// Create Document Component
const Header = () => (
  <View style={styles.headerContainer}>
    <Name />
    <Meta metaLinks={metaLinks} />
  </View>
);

export default Header;
