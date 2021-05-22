import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

    export default class SearchableMovieReviewsContainer extends React.Component{

        constructor(){
            super()
            this.state = {
                query: '',
                reviews: []
            }
            this.handleSubmit = this.handleSubmit.bind(this)
        }
        
    
        async handleSubmit(event)  {
            event.preventDefault()
            await fetch(URL + `&query=${this.state.query}`)
            .then(resp => resp.json())
            .then(data => this.setState({reviews: data.results}))
        }
    
        handleChange = event => {
            this.setState({query: event.target.value})
        }

        render(){
            return(
                <div className='searchable-movie-reviews'>
                    <form onSubmit = {this.handleSubmit}>
                        <label>Search for movie reviews:
                        <input type='text' value={this.state.query} onChange={this.handleChange}/>
                        </label>
                        <input type='submit' value='Submit'/>
                    </form>
                    <MovieReviews reviews={this.state.reviews}/>
                </div>
            )
        }
    }
