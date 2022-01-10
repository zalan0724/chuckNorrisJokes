import React, {useState, FC} from 'react';
import style from './App.module.css';
import Categories from "./components/Categories";
import Joke from './components/Joke';
import chuckImage from './assests/chuck.png'

const App: FC = () => {

    const [selectedCategory, setSelectedCategory] = useState({value: '', requestNew: false})

    return (
        <div className={style.App}>
            <header className={style.Header}>
                <img src={chuckImage} className={style.ChuckImage} alt={'Chuck Norris Image'}/>
                <div className={style.CategoriesContainer}>
                    <h3>Let me tell you a fact about...</h3>
                    <Categories setCategory={setSelectedCategory}/>
                </div>
            </header>
            <Joke category={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        </div>
    );
}

export default App;
