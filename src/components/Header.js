import React from 'react';
import { View, Text, Link, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: '5px',
    color: 'white',
    backgroundColor: 'black'
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    fontSize: 36,
    fontWeight: 'bold'
  },
  metaContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    justifyContent: 'space-around'
  }
});

const social = {
  linkedin: "https://www.linkedin.com/in/sean-baskin/",
  github: "https://github.com/baskinomics",
  stackExchange: "https://stackexchange.com/users/944752/baskinomics"
};

const contact = {
  email: "seanbaskin@gmail.com",
  telephone: "(423) 580-9185"
};

const Name = () => (
  <View style={styles.nameContainer}>
    <Text>Sean</Text>
    <Text>Baskin</Text>
  </View>
);

const Meta = ({ social, contact }) => (
  <View style={styles.metaContainer}>
    <Link src={social.linkedin}>LinkedIn</Link>
    <Link src={social.github}>GitHub</Link>
    <Link src={social.stackExchange}>StackExchange</Link>
    <Text>{contact.email}</Text>
    <Text>{contact.telephone}</Text>
  </View>
);

// Create Document Component
const Header = () => (
  <View style={styles.headerContainer}>
    <Name />
    <Meta social={social} contact={contact} />
  </View>
);

export default Header;
