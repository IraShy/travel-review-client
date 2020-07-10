import React from "react";
import Form from "react-bootstrap/Form";
import Container  from "react-bootstrap/Container"


class CreateReview extends React.Component {
  onInputChange = (event) => {
    const key = event.target.id;
    this.setState({
      [key]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review: this.state }),
    });
    this.props.history.push("/reviews");
  };

  render() {
    return (
      <Container>
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={this.onInputChange}
          />

          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            onChange={this.onInputChange}
          />

          <label htmlFor="year">Year</label>
          <input
            type="text"
            name="year"
            id="year"
            onChange={this.onInputChange}
          />

          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={this.onInputChange}
          />

          <label htmlFor="content">Description</label>
          <textarea
            name="content"
            id="content"
            onChange={this.onInputChange}
          ></textarea>

          <input type="submit" value="Add" />
        </form>
        <button onClick={this.props.history.goBack}>Cancel</button>
      </div>
      </Container>
    );
  }
}

export default CreateReview;
