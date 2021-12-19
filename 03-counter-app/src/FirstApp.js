import React, { Fragment } from "react";

// My first functional component.

const FirstApp = () => {

    return (
        <Fragment>
            <h1>Hello World!</h1>
            <p>This is my first React app.</p>
        </Fragment>
    );

    // Also you can use a Fragment writting <> </> and it will be a Fragment without implicit import.

}

export default FirstApp;