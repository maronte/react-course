import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ categories, setCategories }) => {
    const [inputValue, setInputValue] = useState("")
    const handleInputChange = (e) => setInputValue(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault()
        const cleanInputValue = inputValue.trim();
        if (categories.some( category => category === cleanInputValue ) || cleanInputValue === "") {
            setInputValue("");
            return;
        }
        // You can receive an arrow function as a parameter in a setState function
        // this function returns the new state and its first argument is the previous state
        setCategories([cleanInputValue, ...categories]);
        setInputValue("");
    }
    return (
        <form onSubmit={ handleSubmit }>
          <h2>Add Category</h2>
          <input
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }       
          />
        </form>
    )
}

AddCategory.propTypes = {
    categories: PropTypes.array.isRequired,
    setCategories: PropTypes.func.isRequired
};