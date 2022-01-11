import React, {FC} from 'react';

interface JokeProps {
    joke: string,
}

const Joke: FC<JokeProps> = ({joke}) => {

    return (
        <div>
            <p>{joke}</p>
        </div>
    );
}

export default Joke;