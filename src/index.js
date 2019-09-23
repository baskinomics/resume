import React from 'react';
import ReactPDF, { Font } from '@react-pdf/renderer';
import Resume from './components/Resume.js';
import fs from 'fs';

Font.register({
  family: "Lato",
  src: `${__dirname}/fonts/Lato-Regular.ttf`
});

Font.register({
  family: "Lato Bold",
  src: `${__dirname}/fonts/Lato-Bold.ttf`
});

Font.register({
  family: "Merriweather",
  src: `${__dirname}/fonts/Merriweather-Regular.ttf`
});

Font.register({
  family: "Merriweather Bold",
  src: `${__dirname}/fonts/Merriweather-Bold.ttf`
});

Font.register({
  family: "Merriweather Italic",
  src: `${__dirname}/fonts/Merriweather-RegularItalic.ttf`
});

Font.register({
  family: "Merriweather Sans",
  src: `${__dirname}/fonts/MerriweatherSans-Regular.ttf`
});

Font.register({
  family: "Merriweather Sans Light",
  src: `${__dirname}/fonts/MerriweatherSans-Light.ttf`
});

Font.register({
  family: "Merriweather Sans Bold",
  src: `${__dirname}/fonts/MerriweatherSans-Bold.ttf`
});

Font.register({
  family: "Merriweather Sans Italic",
  src: `${__dirname}/fonts/MerriweatherSans-RegularItalic.ttf`
});

Font.register({
  family: "Hasklug",
  src: `${__dirname}/fonts/hasklug-nerd-font-complete.ttf`
});

// Encountering errors with this approach.
// Font.register({
//   family: "Source Sans Pro",
//   fonts: [
//     { src: `${__dirname}/fonts/OpenSansCondensed-Light.ttf` },
//     { src: `${__dirname}/fonts/OpenSansCondensed-Bold.ttf`, fontStyle: 'bold' }
//   ]
// });

// For now handle build output artfactss.
// TODO Properly handle this with webpack
const dist = './dist'

try {
  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist)
  }
} catch (err) {
  console.error(err)
}

ReactPDF.render(<Resume />, `./dist/Sean-Baskin-Resume.pdf`);
