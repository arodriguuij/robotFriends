import React, { Component } from 'react';
import Cards from '../components/Cards';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import './MainPage.css';

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobotsHandler();
    };

    filteredRobots = () => {
        return  this.props.robots.filter(robot =>
            robot.name.toLocaleLowerCase().includes(this.props.searchField.toLocaleLowerCase()));
    }
    render() {
         return (
            <div className='tc'>
                <Header />
                <SearchBox searchChange={this.props.onSearchChangeHandler} />
                <Scroll>
                    {this.props.isPending ? <h1>Loading</h1> :
                        <ErrorBoundry>
                            <Cards robots={this.filteredRobots()} />
                        </ErrorBoundry>
                    }
                </Scroll>
            </div>
        );
    }
}

export default MainPage;
