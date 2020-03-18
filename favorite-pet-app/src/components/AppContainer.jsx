import React, { Component } from 'react'
import Dog from './Dog';
import Cat from './Cat';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLikesCats : false,
            userLikesDogs : false,
        }
    }

    updateCat = () => {
        this.setState({userLikesDogs : false});
        this.setState({userLikesCats : true});
    }
    updateDog = () => {
        this.setState({userLikesCats : false});
        this.setState({userLikesDogs : true});
    }

    render() {
        let userFavPet;
        if(this.state.userLikesCats){
            userFavPet = <Cat/>
        } else if (this.state.userLikesDogs){
            userFavPet = <Dog/>
        }
        return (
            <div>
                <h1>Favorite Pet App</h1>
                <button onClick = {this.updateCat}>I Love Cats</button>
                <button onClick = {this.updateDog}>I Love Dogs</button>
                {userFavPet}
            </div>
        );
    }
}

export default AppContainer;