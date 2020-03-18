import React, { Component } from 'react'

class Dog extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h1>You're a dog person!</h1>
                <img src="https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782" alt="dog"/>
            </div>
        );
    }
}

export default Dog;