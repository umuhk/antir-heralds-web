import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import { parse } from '@fast-csv/parse';
import Paths from './Paths'

type IndexRecord = {
  title: string,
  path: string
}

type DocumentListProps = {}

type DocumentListState = {
  records: IndexRecord[]
}

export default class DocumentList extends Component<DocumentListProps, DocumentListState> {
  constructor(props: DocumentListProps) {
    super(props)
    this.state = {
      records: []
    };
  }

  componentDidMount() {
    this.evaluateProps();
  }

  render() {
    return (
      <Row>
        <Col>
          <ul>{this.state.records.map((record: IndexRecord) =>
            <li key={record.path}>
              <LinkContainer to={Paths.DOCUMENTS + '/' + record.path}>
                <Nav.Link>{record.title}</Nav.Link>
              </LinkContainer>
            </li>)}
          </ul>
        </Col>
      </Row>
    );
  }

  evaluateProps() {
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
  }
}
