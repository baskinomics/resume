import React from "react";
import ReactPDF from '@react-pdf/renderer';
import MyDocument from "./MyDocument.js";

ReactPDF.render(<Resume />, `${__dirname}/resume.pdf`);
