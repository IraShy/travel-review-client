import React from "react";
import { Link } from "react-router-dom";

class Reviews extends React.Component {
  state = { reviews: [] };

  getReviews = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/reviews`);
    const data = await response.json();
    this.setState({ reviews: data });
  };

  deleteCountry = async (id) => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/reviews/${id}`, {
      method: "DELETE"
    })
    this.getReviews()
  }

  renderReviews = () => {
    return this.state.reviews.map((review, index) => {
      return (
        <div key={index}>
          <h1>{review.title}</h1>
          <p>Country: {review.country}</p>
          <p>Year: {review.year}</p>
          {/* <p>Description: {review.content}</p> */}
          <Link
            to={{
              pathname: `/reviews/${review.id}`,
              state: review,
            }}
          >
            <button>Read review</button>
          </Link>
          {/* <span onClick={() => this.deleteCountry(country.id)}><button>Delete</button></span> */}

          <button onClick={() => this.deleteReview(review.id)}>Delete</button>

          <hr />
        </div>
      );
    });
  };

  componentDidMount() {
    this.getReviews();
  }

  render() {
    return this.renderReviews();
  }
}

export default Reviews;