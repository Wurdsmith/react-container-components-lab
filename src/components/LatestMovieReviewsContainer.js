import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component{
    constructor(){
    super()
    this.state = {
        reviews: []
    }
}
    

    async componentDidMount() {
        await fetch(URL)
        .then(resp => resp.json())
        .then(data => this.setState({reviews: data.results}))
    }

    

    render(){
        return(
            <div className='latestMovieReviewsContainer'>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}
