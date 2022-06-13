import React, { Component, Fragment } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';
// import robots from './robots'; // use deconstructor if multiple exports
import './App.css';

class App extends Component {
    constructor() {
        // per extend, call super()
        super();
        // state leaves in the parent components
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    // part of React
    componentDidMount() {
        // fetch is a window method
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }));
    }
    // use arrow functions to access state
    onSearchChange = (event) => {
        // changing states
        this.setState({ searchField: event.target.value });
    }
    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (!robots.length) {
            return (
                <Fragment>
                    <header className='tc'>
                        <h1 className='f2'>Loading</h1>
                    </header>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <header className='tc'>
                        <h1 className='f2'>RoboFriends</h1>
                    </header>
                    <main className='tc'>
                        <SearchBox searchChange={this.onSearchChange} />
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots={filteredRobots} />
                            </ErrorBoundary>
                        </Scroll>
                    </main>
                </Fragment>
            );
        }
    }
};

export default App;