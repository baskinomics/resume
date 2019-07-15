import React from 'react';
import ReactPDF, { Font } from '@react-pdf/renderer';
import Resume from './components/Resume.js';
import fs from 'fs';

// Register fonts
Font.register({
  family: "Open Sans Condensed",
  src: `${__dirname}/fonts/OpenSansCondensed-Light.ttf`
});

Font.register({
  family: "Open Sans Condensed Bold",
  src: `${__dirname}/fonts/OpenSansCondensed-Bold.ttf`
});

Font.register({
  family: "Open Sans Condensed Italic",
  src: `${__dirname}/fonts/OpenSansCondensed-LightItalic.ttf`
});

Font.register({
  family: "Hasklug",
  src: `${__dirname}/fonts/hasklug-nerd-font-complete.ttf`
});

// Encountering errors with this approach.
// Font.register({
//   family: "Open Sans Condensed",
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
