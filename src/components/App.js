'use strict';

import React from 'react';
import styled from 'styled-components';

const Resume = styled.div`
    font-family: "Source Sans Pro";
    font-size: 16px;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Resume>This is my resume</Resume>
        );
    }
}

export default App;