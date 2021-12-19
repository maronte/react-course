import React, { Fragment } from "react";

// My first functional component.

const name = "John";

const FirstApp = () => {

    return (
        <Fragment>
            <h1>Hello { name } </h1>
            { /** You can add expressions or variables that are strings or numbers, also if you add
             * an array, it will be rendered as a list with /n as glue, the array also contains same data types.
             * Other objects are not supported. 
             * */ }
            <p>This is my first React app.</p>
        </Fragment>
    );

    // Also you can use a Fragment writting <> </> and it will be a Fragment without implicit import.

}

export default FirstApp;