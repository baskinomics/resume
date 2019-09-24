import React from 'react';
import ReactPDF, { Font } from '@react-pdf/renderer';
import Resume from './components/Resume.js';
import fs from 'fs';

Font.register({
  family: "Source Sans Pro Bold",
  format: "truetype",
  src: "https://github.com/google/fonts/blob/8143a3e2d9f7656bc7e551f96d6294d47882d907/ofl/sourcesanspro/SourceSansPro-Bold.ttf?raw=true"
});

Font.register({
  family: "Source Sans Pro",
  format: "truetype",
  src: "https://github.com/google/fonts/blob/8143a3e2d9f7656bc7e551f96d6294d47882d907/ofl/sourcesanspro/SourceSansPro-Regular.ttf?raw=true"
});

Font.register({
  family: "Hasklug",
  src: `${__dirname}/fonts/hasklug-nerd-font-complete.ttf`
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

ReactPDF.render(<Resume />, `./dist/Sean-Baskin-Resume.pdf`);
