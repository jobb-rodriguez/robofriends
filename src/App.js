import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
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
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.robots.length === 0) {
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
                            <CardList robots={filteredRobots} />
                        </Scroll>
                    </main>
                </Fragment>
            );
        }
    }
};

export default App;