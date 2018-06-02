import React, {Component} from 'react';
import "../node_modules/video-react/dist/video-react.css";
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap';
import {Player} from 'video-react';


class App extends Component {
  render() {
    return <div className="App">
      <Grid>
        <Row className="show-grid">
          <Col xs={8}>
            <Player>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
            </Player>
          </Col>
          <Col xs={4}>
            Hello 2
          </Col>
        </Row>
      </Grid>
    </div>;
  }
}

export default App;
