import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { ListGroupItem, CardGroup } from "react-bootstrap";
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'


class Reviews extends React.Component {
  state = { reviews: [] };

  getReviews = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/reviews`
    );
    const data = await response.json();
    this.setState({ reviews: data});
  };

  deleteReview = async (id) => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/reviews/${id}`, {
      method: "DELETE",
    });
    this.getReviews();
  };

  renderReviews = () => {
    return this.state.reviews.map((review, index) => {
      return (
        // <CardDeck>
        <Card border="dark" style= {{ width: '18rem', justifyContent: 'space-evenly'}}>
          
        <div key={index}>
          <Card.Body>
         <Card.Title>{review.title}</Card.Title>
         </Card.Body>
         <ListGroup className="list-group-flush" variant= "Primary">
          <ListGroupItem>Country: {review.country}</ListGroupItem>
          <ListGroupItem>Year: {review.year}</ListGroupItem>
          </ListGroup>
          {/* <p>Description: {review.content}</p> */}
          <Link
            to={{
              pathname: `/reviews/${review.id}`,
              state: review,
            }}
          >
            <Button variant ="outline-success">Read review</Button>
          </Link>
          <Link to={`/reviews/${review.id}/edit`}>
            <Button variant= "outline-warning">Edit</Button>
          </Link>
          {/* <span onClick={() => this.deleteCountry(country.id)}><button>Delete</button></span> */}

          <Button variant="outline-danger"
            onClick={() =>
              window.confirm("Are you sure?")
                ? this.deleteReview(review.id)
                : this.props.history.goBack
            }
          >
            Delete
          </Button>{''}

           
          </div>
          </Card>
          //  </CardDeck> 
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
