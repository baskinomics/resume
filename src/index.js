import React from 'react';
import ReactPDF, {
  Font
} from '@react-pdf/renderer';
import Resume from './components/Resume.js';
import fs from 'fs';

// Register fonts
Font.register(`${__dirname}/fonts/ProzaLibre-Regular.ttf`, {
  family: 'Proza Libre',
});

Font.register(`${__dirname}/fonts/OpenSansCondensed-Light.ttf`, {
  family: 'Open Sans Condensed',
});

Font.register(`${__dirname}/fonts/OpenSansCondensed-Bold.ttf`, {
  family: 'Open Sans Condensed Bold',
});

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

ReactPDF.render(<Resume />, `./dist/resume.pdf`);
