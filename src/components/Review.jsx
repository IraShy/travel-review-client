import React from "react";

class Review extends React.Component {
  render() {
    const review = this.props.location.state;
    return (
      <div>
        <h1>{review.title}</h1>
        <h2>Country: {review.country}</h2>
        <p>Year: {review.year}</p>
        <hr/>
        <div>{review.content}</div>
        <button onClick={this.props.history.goBack}>Back</button>
      </div>
    );
  }
}

export default Review;
