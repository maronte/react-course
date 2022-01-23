import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiftExpertApp = () => {;
    const [ categories, setCategories ] = useState([
        'Kimetsu no Yaiba',
        'One Piece',
        'Shingeki no Kyojin'
    ]);

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
            categories.map(category => <li key={category}>{category}</li>)
        }
    </ul>
    </>
    );
};