import React from "react";
import ReactPDF from '@react-pdf/renderer';
import Resume from "./Resume.js";

ReactPDF.render(<Resume />, `${__dirname}/resume.pdf`);
