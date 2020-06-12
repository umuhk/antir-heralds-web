import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import { parse } from '@fast-csv/parse';
import { MarkdownDoc } from './MarkdownDoc'
import Paths from './Paths'

type DocumentProps = {
  filename: string,
  section: string
}

type IndexRecord = {
  title: string,
  path: string
}

type DocumentState = {
  records: IndexRecord[],
  source: string
}

export default class Document extends Component<RouteComponentProps<DocumentProps>, DocumentState> {
  constructor(props: RouteComponentProps<DocumentProps>) {
    super(props)
    this.state = {
      records: [],
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
          {this.state.records.length > 0
            ? <ul>{this.state.records.map((record: IndexRecord) =>
              <li key={record.path}><LinkContainer to={Paths.DOCUMENTS + '/' + record.path}><Nav.Link>{record.title}</Nav.Link></LinkContainer></li>)}</ul>
            : <MarkdownDoc source={this.state.source} />
          }
        </Col>
      </Row>
    );
  }

  evaluateProps() {
    if (!(this.props.match.params.filename)) {
      window.fetch('/data/documents/index.csv')
        .then(response => response.text())
        .then(text => {
          const stream = parse({ headers: true })
            .on('error', error => console.error(error))
            .on('data', row => {
              const newRecords = this.state.records.concat(row);
              this.setState({ records: newRecords })
            })
            .on('end', (rowCount: number) => console.log(`Parsed ${rowCount} rows`));
          stream.write(text);
          stream.end();
        });
    } else {
      const dataPath = '/data/documents/'
        + (this.props.match.params.section ? this.props.match.params.section + '/' : '')
        + this.props.match.params.filename;
      window.fetch(dataPath)
        .then(response => response.text())
        .then(text => this.setState({ source: text }));
    }
  }
}
