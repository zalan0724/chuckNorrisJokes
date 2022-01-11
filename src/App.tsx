import React, {useState, FC} from 'react';
import style from './App.module.css';
import Categories from "./components/Categories";
import Joke from './components/Joke';
import chuckImage from './assests/chuck.png'
import axios from 'axios';

const App: FC = () => {

    const [fact, setFact] = useState<string>('Please choose a category')

    const fetchJoke = (category: string) => {
        axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
            .then(res => res.data.value)
            .then(value => setFact(value))
            .catch(err => alert(err))
    }

    return (
        <div className={style.App}>
            <div className={style.Wrapper}>
                <header className={style.Header}>
                    <img src={chuckImage} className={style.ChuckImage} alt={'Chuck Norris'}/>
                    <div className={style.CategoriesContainer}>
                        <h3>Let me tell you a fact about...</h3>
                        <Categories handleClick={fetchJoke}/>
                    </div>
                </header>
                <Joke fact={fact}/>
            </div>
        </div>
    );
}

export default App;
