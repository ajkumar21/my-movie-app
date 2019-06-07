import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import token from './tokens';
import Row from './row';
import Search from './searchBar';

class App extends Component {
  state = {
    movieIds: [],
    movieName: ''
  };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    this.setState({ movieName: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    axios.get(token + 's=' + this.state.movieName).then(movies => {
      this.setState({ movieIds: movies.data.Search });
    });
  }

  render() {
    let movies = this.state.movieIds.map(movie => {
      return (
        <Row
          id={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.poster}
        />
      );
    });
    return (
      <div className='App container'>
        <Search
          onChange={this.handleChange}
          onSubmit={this.submit}
          movieName={this.state.movieName}
        />
        <Table striped>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>{movies}</tbody>
        </Table>
      </div>
    );
  }
}

export default App;
