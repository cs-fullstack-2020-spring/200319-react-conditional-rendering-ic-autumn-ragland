import React, { Component, Fragment } from 'react';
import Cat from './Cat'
import Dog from './Dog';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        // set initial state
        this.state = {
            userLikesCats: false, // flag to conditionally render Cat component
            userLikesDogs: false, // flag to conditionally render Dog component
        }
    }
    // event handler - tied to onClick listener
    updateUserLikesCats = () => {
        this.setState({ userLikesDogs: false }); // toggle Dog flag to false
        this.setState({ userLikesCats: true }); // toggle Cat flag to true
    }

    updateUserLikesDogs = () => {
        this.setState({ userLikesCats: false }); // toggle Cat flag to false
        this.setState({ userLikesDogs: true }); // toggle Dog flag to true
    }

    render() {
        // conditionally render child component
        let userFavPet; // declare element variable as undefined
        // if userLikeDogs is true
        if (this.state.userLikesDogs) {
            userFavPet = <Dog /> // set value of element variable to Dog component
        }
        // if userLikeCats is true
        else if (this.state.userLikesCats) {
            userFavPet = <Cat /> // set value of element variable to Cat component
        }
        // display test, buttons, and variable
        return (
            <Fragment>
                <h1>Favorite Pet App</h1>
                <button onClick={this.updateUserLikesDogs}>I Love Dogs</button>
                <button onClick={this.updateUserLikesCats}>I Love Cats</button>
                {userFavPet}
            </Fragment>
        )
    }
}
export default AppContainer