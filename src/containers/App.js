import React, { useEffect, Component } from 'react';
import Cards from '../components/Cards';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';
import Header from '../components/Header';
import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.onRequestRobotsHandler();
    };

    render() {
        console.log('app')
        const filteredRobots = this.props.robots.filter(robot =>
            robot.name.toLocaleLowerCase().includes(this.props.searchField.toLocaleLowerCase()));
        return (
            <div className='tc'>
                <Header />
                <SearchBox searchChange={this.props.onSearchChange} />
                <Scroll>
                    {this.props.isPending ? <h1>Loading</h1> :
                        <ErrorBoundry>
                            <Cards robots={filteredRobots} />
                        </ErrorBoundry>
                    }
                </Scroll>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChangeHandler: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobotsHandler: () => requestRobots(dispatch)
        //      onRequestRobotsHandler: () => dispatch(requestRobots())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
