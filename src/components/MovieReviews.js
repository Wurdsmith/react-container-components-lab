import React from 'react'


    const Review = ({
        headline,
        byline,
        publication_date,
        link,
        summary_short
    }, i) => {
        return (
            <div key={i} className="review">
              <h2>{headline}</h2>
              <strong><i>By: {byline}</i></strong>
              <strong><div>Published on: {publication_date}</div></strong>
              <div>{summary_short}</div>
              <a href={link.url}>{link.url}</a>
            </div>
        )
    }



const MovieReviews = ({reviews}) => (   
    <div className="review-list">{reviews.map(Review)} </div>
)
   

   
MovieReviews.defaultProps = {
    reviews: []
  };
  
export default MovieReviews