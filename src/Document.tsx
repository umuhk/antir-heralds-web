import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { MarkdownDoc } from './MarkdownDoc'

type DocumentProps = {
  filename: string,
  section: string
}

type DocumentState = {
  source: string
}

export default class Document extends Component<RouteComponentProps<DocumentProps>, DocumentState> {
  constructor(props: RouteComponentProps<DocumentProps>) {
    super(props)
    this.state = {
      source: ''
    };
  }

  componentDidMount() {
    this.evaluateProps();
  }

  render() {
    return (
      <Row>
        <Col>
          <MarkdownDoc source={this.state.source} />
        </Col>
      </Row>
    );
  }

  evaluateProps() {
    const dataPath = '/data/documents/'
      + (this.props.match.params.section ? this.props.match.params.section + '/' : '')
      + this.props.match.params.filename;
    window.fetch(dataPath)
      .then(response => response.text())
      .then(text => this.setState({ source: text }));
  }
}
