import React, { Component } from 'react';
import { Jumbotron, Panel, PageHeader } from 'react-bootstrap';

class ProjectsPage extends Component {
  render() {
    return (
      <div className="container">
        <div>
        <PageHeader>
          Projects <small>Subtext for header</small>
        </PageHeader>
        </div>
        <div>
          <div>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">Indian Harbour</Panel.Title>
              </Panel.Heading>
              <Panel.Body>Panel content</Panel.Body>
            </Panel>
          </div>
          <div>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">True Beauty Brooklyn</Panel.Title>
              </Panel.Heading>
              <Panel.Body>Panel content</Panel.Body>
            </Panel>
          </div>
          <div>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">DevShop.NYC</Panel.Title>
              </Panel.Heading>
              <Panel.Body>Panel content</Panel.Body>
            </Panel>
          </div>
          <div>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">My Favorite Lesbian</Panel.Title>
              </Panel.Heading>
              <Panel.Body>Panel content</Panel.Body>
            </Panel>
        </div>
      </div>  
    </div>
    )
  }
}
export default ProjectsPage;
