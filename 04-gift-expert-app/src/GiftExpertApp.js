import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GIFGrid } from "./components/GIFGrid";

export const GiftExpertApp = () => {;
    const [ categories, setCategories ] = useState(['Kimetsu no Yaiba']);

    return (
    <>
    <h2>GiftExpertApp</h2>
    <AddCategory 
        setCategories = { setCategories }
        categories = { categories }
    />
    <hr/>
    <ul>
        {
            categories.map(category => (
                <GIFGrid key={category} category={ category } />
            ))
        }
    </ul>
    </>
    );
};