import React from "react";

class EditReview extends React.Component {
  state = { country: this.props.country, year: null, content: "", title: this.props.title, loading: true, id: this.props.match.params.id };
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { id, title, country, year, content } = this.state
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/reviews/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, country, year, content }),
    });
    this.props.history.push("/reviews");
  };

  async componentDidMount() {
    const { id } = this.state
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/reviews/${id}`);
    const { title, country, year, content } = await response.json();
    this.setState({ title, country, year, content, loading: false });
  }

  render() {
    const { title, country, year, content, loading } = this.state;
    return (
      !loading && (
        <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={this.onInputChange}
          />
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            value={country}
            onChange={this.onInputChange}
          />
          <label htmlFor="year">Year</label>
          <input
            type="text"
            name="year"
            id="year"
            value={year}
            onChange={this.onInputChange}
          />
          <label htmlFor="content">Description</label>
          <textarea
            name="content"
            id="content"
            value={content}
            onChange={this.onInputChange}
          ></textarea>
          <input type="submit" value="Edit" />
        </form>
       <button onClick={this.props.history.goBack}>Cancel</button>
      </div>
      )
    );
  }
}

export default EditReview;