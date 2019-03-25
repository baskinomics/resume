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
  linkedin: {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/sean-baskin/"
  },
  github: {
    text: "GitHub",
    href: "https://github.com/baskinomics"
  },
  stackExchange: {
    text: "StackExchange",
    href: "https://stackexchange.com/users/944752/baskinomics"
  }
};

const contact = {
  email: {
    text: "seanbaskin@gmail.com",
    href: "tel:1-423-580-9185"
  },
  telephone: {
    text: "(423) 580-9185",
    href: "tel:1-423-580-9185"
  }
};

const Name = () => (
  <View style={styles.nameContainer}>
    <Text>Sean</Text>
    <Text>Baskin</Text>
  </View>
);

const Meta = ({ social, contact }) => (
  <View style={styles.metaContainer}>
    <Link src={social.linkedin.href}>{social.linkedin.text}</Link>
    <Link src={social.github.href}>{social.github.text}</Link>
    <Link src={social.stackExchange.href}>{social.stackExchange.text}</Link>
    <Link src={contact.email.href}>{contact.email.text}</Link>
    <Link src={contact.telephone.href}>{contact.telephone.text}</Link>
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
