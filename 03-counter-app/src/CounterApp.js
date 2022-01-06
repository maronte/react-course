import React, { Fragment, useState } from "react";
import { PropTypes } from "prop-types";

const CounterApp = ({ value }) => {
    
    //Handle click event to increment the counter.
    const handleAdd = e => {
        /**
         * You can use the setState function to update the state.
         */
        setCounter(counter + 1);

        // Other way to update the state.
        // setCounter((counter) => counter + 1);
    };

    const handleSubtract = e => {
        setCounter(counter - 1);
    };

    const handleReset = e => {
        setCounter(value);
    }

    const [counter, setCounter] = useState(value);
    
    return (
        <Fragment>
            <h1>Counter App</h1>
            <h2>Counter: { counter }</h2>
            <button onClick={ handleAdd }>Increment</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>Decrement</button>
        </Fragment>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

export default CounterApp;