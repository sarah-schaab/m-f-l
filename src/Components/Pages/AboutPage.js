import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

class AboutPage extends Component {
  render() {
    return (
      <div className="container">
        <PageHeader>
          About <small>Subtext for header</small>
        </PageHeader>
      </div>
    )
  }
}
export default AboutPage;
