import React, { Component, Fragment } from 'react';

class Cat extends Component {
    // useless constructor
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    // display text and image related to cats
    render() {
        return (
            <Fragment>
                <h2>You're a cat person!</h2>
                <img src="https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg" alt="cat image" />
            </Fragment>
        )
    }
}
export default Cat;