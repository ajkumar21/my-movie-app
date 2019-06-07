/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import axios from 'axios';
import token from './tokens';

class movieInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      plot: '',
      poster: ''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  getPlot(id) {
    return axios.get(token + 'i=' + id + '&plot=full');
  }

  componentWillMount() {
    this.getPlot(this.props.imdbID).then(movie => {
      this.setState({ plot: movie.data.Plot, poster: movie.data.Poster });
      console.log(movie.data.Plot);
    });
  }

  render() {
    return (
      <div>
        <Button color='danger' onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          size='lg'
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            <Container>
              <Row>
                <Col>
                  <img src={this.state.poster} align='left' />
                </Col>
                <Col>{this.state.plot}</Col>
              </Row>
            </Container>

            <ModalFooter>
              <Button color='primary' onClick={this.toggle}>
                Add to Favourites
              </Button>{' '}
              <Button color='secondary' onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default movieInfo;
