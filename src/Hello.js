import React from 'react';
import './Hello.css';
// installed npm i tachyons

class Hello extends React.Component {
    render() {
        return (
            // jsx
            <div className="f1 tc">
                <h1>Hello World</h1>
                <p>{this.props.greeting}</p>
            </div>
        )
    }
}

export default Hello;