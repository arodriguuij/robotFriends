import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField } from '../actions';
import { connect } from 'react-redux';

import './App.css';

const App = props => {
    const [robotsState, setRobotsState] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobotsState(users));
    }, [setRobotsState]);

    const robotsFiltered = robotsState.filter(robot =>
        robot.name.toLocaleLowerCase().includes(props.searchField.toLocaleLowerCase()));

    return !robotsState.length
        ? <h1>Loading...</h1>
        : (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={(e) => props.onSearchChangeHandler(e)} />
                <Scroll>
                    <ErrorBoundry>
                        <Cards robots={robotsFiltered} /> 
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
}

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChangeHandler: (event) => dispatch(setSearchField(event.target.value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
