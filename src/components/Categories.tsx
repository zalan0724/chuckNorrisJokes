import axios from 'axios';
import React, {FC, useEffect, useState} from 'react';
import styles from './Categories.module.css'
import {v4 as uuid} from 'uuid'

const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

interface CategoriesProps {
    handleClick: (category: string) => void
}

const Categories: FC<CategoriesProps> = ({handleClick}) => {

    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/categories')
            .then(res => res.data)
            .then(data => setCategories(data))
    }, [])

    return (
        <div className={styles.Categories}>
            {categories.map(category => (<button key={uuid()} title={category} className={styles.Button} onClick={() => {
                handleClick(category);
            }}>{capitalizeFirstLetter(category)}</button>))}
        </div>
    );
}

export default Categories;