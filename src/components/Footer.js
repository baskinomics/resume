import React from 'react';
import { View, Text, Link, StyleSheet } from '@react-pdf/renderer';
import { version } from '../../package.json';

const LETTER_PAGE_HEIGHT = 792.0;
const FOOTER_HEIGHT = LETTER_PAGE_HEIGHT * 0.05;

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    height: `${FOOTER_HEIGHT}px`,
    color: 'white',
    backgroundColor: 'grey',
    // todo - 
    justifyContent: "center",
  },

  // todo 
  footerText: {
    fontFamily: 'Hasklug',
    fontSize: '6pt',
    textAlign: 'center',
    // paddingTop: '125px',
    // alignSelf: 'flex-end'
  },
  
  // todo documentation
  metaContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: "85%",
    marginRight: "auto",
    marginLeft: "auto",
    fontSize: '8pt',
  },

  // todo documentation
  metaLinks: {
    display: 'flex',
    flexDirection: 'row',
  },

  // todo documentation
  icon: {
    fontFamily: 'Hasklug',
    // fontSize: "10pt",
    marginRight: '5px',
  },
});

const metaLinks = [
  {
    id: 0,
    icon: "\uf83b",
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/sean-baskin/"
  },
  {
    id: 1,
    icon: "\ue709",
    text: "GitHub",
    href: "https://github.com/baskinomics"
  },
  {
    id: 2,
    icon: "\ufb0a",
    text: "StackExchange",
    href: "https://stackexchange.com/users/944752/baskinomics"
  },
  {
    id: 3,
    icon: "\uf6ef",
    text: "seanbaskin@gmail.com",
    href: "mailto:seanbaskin@gmail.com"
  },
  {
    id: 4,
    icon: "\uf8f1",
    text: "(423) 580-9185",
    href: "tel:1-423-580-9185"
  }
];

// todo documentation
const Icon = ({ unicode }) => (
  <Text style={styles.icon}>{unicode}</Text>
);

// todo documentation
const MetaLink = ({ link }) => (
  <View style={styles.metaLinks} debug={false}>
    <Icon unicode={link.icon} />
    <Link src={link.href}>{link.text}</Link>
  </View>
);

// todo documentation
const Meta = ({ metaLinks }) => (
  <View style={styles.metaContainer} debug={false}>
    {
      // Per https://reactjs.org/docs/lists-and-keys.html#keys
      metaLinks.map(link => (
        <MetaLink key={link.id} link={link} />
      ))
    }
  </View>
);

// <Text style={ styles.footerText }>
// <Link src="https://github.com/baskinomics/resume">{ "v" + version }</Link>
// </Text>
const Footer = () => (
  <View style={styles.footerContainer} debug={false}>
    <Meta metaLinks={metaLinks} />
  </View>
);

export default Footer;
