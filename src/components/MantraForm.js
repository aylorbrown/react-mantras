//  class component that has its own state so it can keep up with what the user is typing 

import React from 'react';


export default class MantraForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                {/* use state when keeping up with values over time/ when there is interactivity */}
                    <input 
                    onChange={this._handleChange}
                    value= {this.state.text}
                    />
                    <input type="submit" value="Rumi"/>
                </form>
            </div>
        )
    }

    _handleSubmit = (event) => {
        // don't go to another page! 
        event.preventDefault(); 
        this.props.handleSubmit(this.state.text);
        this.setState ({
            text:''
        })
        
    }

    // modify component states with helper function 
    // be able to type in input box!
    _handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }
}