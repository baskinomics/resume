import React from 'react';
import ReactPDF, { Font } from '@react-pdf/renderer';
import Resume from './components/Resume.js';

// Register fonts
Font.register(`${__dirname}/fonts/FiraCode-Regular.woff`, {
  family: 'Fira Code',
});

ReactPDF.render(<Resume />, `${__dirname}/resume.pdf`);
