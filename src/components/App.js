'use strict';

import React from 'react';
import styled from 'styled-components';

const Resume = styled.p`
    font-family: "Source Sans Pro";
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