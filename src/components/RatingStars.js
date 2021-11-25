import React, { Component } from "react";
import BeautyStars from 'beauty-stars'
import './RatingStars.scss'

export default class RatingStars extends Component {
    state={ value: 0 };
    render() {
        console.log()
        return(
            <BeautyStars 
                value={this.state.value}
                onChange={value => this.setState({ value })}
                maxStars={10}
                inactiveColor={"#666773"}
                activeColor="red"
                half={true}
            />
        )
    }
}