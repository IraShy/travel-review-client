import React from "react";
import { Link } from "react-router-dom";

class Review extends React.Component {

  deleteReview = async (id) => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/reviews/${id}`, {
      method: "DELETE"
    })
    this.props.history.push("/reviews")
  }

  render() {
    const review = this.props.location.state;
    return (
      <div>
        <h1>{review.title}</h1>
        <h2>Country: {review.country}</h2>
        <p>Year: {review.year}</p>
        <hr/>
        <div>{review.content}</div>
        <Link 
            to={`/reviews/${review.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => this.deleteReview(review.id)}>Delete</button>
        <button onClick={this.props.history.goBack}>Back</button>
      </div>
    );
  }
}

export default Review;
