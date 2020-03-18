import React, { Component } from 'react'

class Cat extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h1>You're a cat person!</h1>
                <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_weight_other/1800x1200_cat_weight_other.jpg?resize=600px:*" alt="cat"/>
            </div>
        );
    }
}

export default Cat;