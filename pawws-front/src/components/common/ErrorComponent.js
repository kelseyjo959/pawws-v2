/*eslint-disable */
import React from 'react';

/* istanbul ignore next */
class ErrorComponent extends React.Component {
    componentDidCatch(error, info) {
        console.log('caught error');
        console.log(error);
        console.log(info);
    }
}

export default ErrorComponent;
/* eslint-enable */
