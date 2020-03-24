import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';

const App = () => {
    const [robotsState, setRobotsState] = useState([]);
    const [searchState, setSearchState] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobotsState(users));
    }, [setRobotsState]);

    const onSearchChangeHandler = (e) => {
        setSearchState(e.target.value);
    }

    const robotsFiltered = robotsState.filter(robot =>
        robot.name.toLocaleLowerCase().includes(searchState.toLocaleLowerCase()));

    return !robotsState.length
        ? <h1>Loading...</h1>
        : (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={(e) => onSearchChangeHandler(e)} />
                <Scroll>
                    <Cards robots={robotsFiltered} />
                </Scroll>
            </div>
        );
}

export default App;