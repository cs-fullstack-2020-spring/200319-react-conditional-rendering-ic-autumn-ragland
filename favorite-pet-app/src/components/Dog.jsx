import React, { Component, Fragment } from 'react';

class Dog extends Component {
    // useless constructor
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    // display text and image related to dogs
    render() {
        return (
            <Fragment>
                <h2>You're a dog person!</h2>
                <img src="https://i.guim.co.uk/img/media/20098ae982d6b3ba4d70ede3ef9b8f79ab1205ce/0_0_969_1005/master/969.jpg?width=300&quality=85&auto=format&fit=max&s=26fe0a6479a2b57e12f31c39e6b1c1ef" alt="dog image" />
            </Fragment>
        )
    }
}
export default Dog;