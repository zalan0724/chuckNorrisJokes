import axios from 'axios';
import React, {FC, useEffect, useState} from 'react';
import styles from './Categories.module.css'
import {v4 as uuid} from 'uuid'

const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

interface CategoriesProps {
    setCategory: (category: any) => void
}

const Categories: FC<CategoriesProps> = ({setCategory}) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/categories')
            .then(res => res.data)
            .then(data => setCategories(data))
    }, [])

    return (
        <div className={styles.Categories}>
            {categories.map(category => (<button key={uuid()} onClick={() => {
                setCategory({value: category, requestNew: true});
            }}>{capitalizeFirstLetter(category)}</button>))}
        </div>
    );
}

export default Categories;