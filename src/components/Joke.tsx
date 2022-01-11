import React, {FC} from 'react';
import style from './Joke.module.css'

interface JokeProps {
    fact: string,
}

const Joke: FC<JokeProps> = ({fact}) => {

    return (
        <div className={style.Joke}>
            <h3>{fact}</h3>
        </div>
    );
}

export default Joke;