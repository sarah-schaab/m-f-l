import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <PageHeader>
          Title <small>Subtext for header</small>
        </PageHeader>
      </div>
    )
  }
}
export default HomePage;
