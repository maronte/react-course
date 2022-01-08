import React, { Fragment } from "react";
import { PropTypes } from "prop-types";
// My first functional component.

// Props always are passed in as an object.
const FirstApp = ({ greet, name }) => {

    return (
        <Fragment>
            <h1>{ greet } { name }</h1>
            { /** You can add expressions or variables that are strings or numbers, also if you add
             * an array, it will be rendered as a list with /n as glue, the array also contains same data types.
             * Other objects are not supported. 
             * */ }
            <p>This is my first React app.</p>
        </Fragment>
    );

    // Also you can use a Fragment writting <> </> and it will be a Fragment without implicit import.

}


// PropTypes are used to validate the props.
FirstApp.propTypes = {
    name: PropTypes.string.isRequired
};

// Also you can add default props. Different from destructuring props, it is property is added the object.

FirstApp.defaultProps = {
    greet: "Hello"
}

export default FirstApp;