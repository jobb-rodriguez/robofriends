import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import robots from './robots'; // use deconstructor if multiple exports

class App extends Component {
    constructor() {
        // per extend, call super()
        super();
        // state leaves in the parent components
        this.state = {
            robots: robots,
            searchField: ''
        }
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
        return (
            <Fragment>
                <header>
                    <h1 className='tc'>RoboFriends</h1>
                </header>
                <main className='tc'>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filteredRobots} />
                </main>
            </Fragment>
        );
    }
};

export default App;