import React from 'react';
import { View, Text, Link, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100px',
    width: '100%',
    paddingLeft: '20px',
    paddingRight: '20px',
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
    height: '100%',
    width: '30%',
    paddingLeft: '85px',
    paddingTop: '10px',
    paddingBottom: '10px',
    justifyContent: 'space-between',
    fontSize: '9pt',
    fontFamily: 'Open Sans Condensed Bold'
  },
  icon: {
    fontFamily: 'Hasklug',
    fontSize: 12,
    marginRight: '5px',
  },
  metaLinks: {
    display: 'flex',
    flexDirection: 'row',
  }
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
const Name = () => (
  <View style={ styles.nameContainer }>
    <Text>Sean</Text>
    <Text>Baskin</Text>
  </View>
);

// todo documentation
const Icon = ({ unicode }) => (
  <Text style={ styles.icon }>{ unicode }</Text>
);

// todo documentation
const MetaLink = ({ link }) => (
  <View style={ styles.metaLinks }>
    <Icon unicode={ link.icon }/>
    <Link src={ link.href }>{ link.text }</Link>
  </View>
);

// todo documentation
const Meta = ({ metaLinks }) => (
  <View style={ styles.metaContainer }>
    {
      // Per https://reactjs.org/docs/lists-and-keys.html#keys
      metaLinks.map(link => (
        <MetaLink key={ link.id } link={ link }/>
      ))
    }
  </View>
);

// Create Document Component
const Header = () => (
  <View style={ styles.headerContainer }>
    <Name />
    <Meta metaLinks={ metaLinks } />
  </View>
);

export default Header;
