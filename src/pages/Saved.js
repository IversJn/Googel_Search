import React from "react";
// import Hero from "../components/Hero";
import Container from "../components/Container";
import API from "../utils/API";
// import Row from "../components/Row";
// import Col from "../components/Col";

class Saved extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          savedBooks: []
      }
  }

  componentWillMount() {
      API.getBooks().then(
          (response) => {
              this.setState({savedBooks: response.data});
          }
      ).catch(
          (err) => {
              console.log(err);
          }
      );
  }

  render() {
      console.log(this.state.savedBooks);
      return(
          <main>
              <Container savedBooks={this.state.savedBooks} path={this.props.match.path}/>
          </main>
      );
  }
}

export default Saved;
