import React, { Component } from 'react';
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
import './App.css';

class App extends Component {
    render() {
        return <MainPage {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChangeHandler: (event) => dispatch(setSearchField(event.target.value)),
        //onRequestRobotsHandler: () => requestRobots(dispatch)
        onRequestRobotsHandler: () => dispatch(requestRobots())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)