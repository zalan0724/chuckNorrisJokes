import React, {useState, FC} from 'react';
import './App.css';
import Categories from "./components/Categories";
import Joke from './components/Joke';

const App: FC = () => {

    const [category, setCategory] = useState({value: '', requestNew: false})

    return (
        <div className="App">
            <div>
                <Categories setCategory={setCategory}/>
                <Joke category={category} setCategory={setCategory}/>
            </div>
        </div>
    );
}

export default App;
