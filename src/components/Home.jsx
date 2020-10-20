import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className = 'homeDiv'>
                <img className='homeImage' src={require("./images/persus_LP_img.png")} alt=""/>
                <h2>Who are we?</h2>
                <p>
                    We are a group of people passionate about making a change in the world. 2020 tried to knock us down but, but in the midst of the pandemic we came to realize that we 
                    needed to be reselient, we need to be able to make changes and affect our planet in a positive way. <br/> <br/> You can't change what you can measure and we want to give 
                    our users the tools necessary to measure their personal sustainability. The Score will measure the three key areas of sustainability: People, Planet, and Prosperity. 
                </p>
            </div>
        )
    }
}
