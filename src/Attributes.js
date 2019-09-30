// See: https://github.com/diegomura/react-pdf/blob/master/src/utils/pageSizes.js
const LETTER_PAGE_HEIGHT = 792.0;
const LETTER_PAGE_WIDTH = 612.0;

// Header
const HEADER_HEIGHT = LETTER_PAGE_HEIGHT * 0.1;

// Content
const CONTENT_HEIGHT = LETTER_PAGE_HEIGHT * 0.85;
const CONTENT_WIDTH = LETTER_PAGE_WIDTH - 20;
const COLUMN_WIDTH = CONTENT_WIDTH / 2;

// Footer
const FOOTER_HEIGHT = LETTER_PAGE_HEIGHT * 0.05;

export {
    LETTER_PAGE_HEIGHT,
    LETTER_PAGE_WIDTH,
    HEADER_HEIGHT,
    CONTENT_HEIGHT,
    CONTENT_WIDTH,
    COLUMN_WIDTH,
    FOOTER_HEIGHT
};