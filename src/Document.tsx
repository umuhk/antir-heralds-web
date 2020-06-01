import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { MarkdownDoc } from './MarkdownDoc'

type DocumentProps = {
  filename: string
}

type IndexRecord = {
  title: string,
  path: string
}

type DocumentState = {
  index: boolean,
  records: IndexRecord[],
  source: string
}

export default class Document extends Component<RouteComponentProps<DocumentProps>, DocumentState> {
  constructor(props: RouteComponentProps<DocumentProps>) {
    super(props)
    this.state = {
      index: !(this.props.match.params.filename),
      records: [],
      source: ''
    };
  }

  componentDidMount() {
    if (this.state.index) {
      window.fetch('/documents/index.csv')
      .then(response => response.text())
      .then(text => {
      });
  } else {
      window.fetch('/documents/reference/' + this.props.match.params.filename + '.md')
        .then(response => response.text())
        .then(text => this.setState({ source: text }));
    }
  }

  render() {
    return (
      <Row>
        <Col>
          { this.state.index 
          ? <ul>{this.state.records.map((record: IndexRecord) => <li>{record}</li>)}</ul>
          : <MarkdownDoc source={this.state.source} />
          }
        </Col>
      </Row>
    );
  }
}
