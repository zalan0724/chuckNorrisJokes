import React, {FC, useEffect, useState} from 'react';
import axios from "axios";

interface JokeProps {
    category: { value: string, requestNew: boolean },
    setCategory: (category: any) => void
}

const Joke: FC<JokeProps> = ({category, setCategory}) => {

    const [joke, setJoke] = useState('Please choose a category');

    useEffect(() => {
        if (category.requestNew) {
            axios.get(`https://api.chucknorris.io/jokes/random?category=${category.value}`)
                .then(res => res.data.value)
                .then(joke => {
                    setJoke(joke)
                    setCategory({category: category.value, requestNew: false})
                })
        }
    }, [category])

    return (
        <div>
            <p>{joke}</p>
        </div>
    );
}

export default Joke;