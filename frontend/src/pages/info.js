import React from 'react';
import Menubar from '../sections/Menubar.js';
import { Container, Row, Col, ListGroup, List, ListGroupItem, Card,CardHeader, CardImg, CardImgOverlay,CardTitle, CardBody } from 'reactstrap';
import '../styles/info.css'; // Import custom CSS for styling
import infopageimage from '../images/infopage.png';

function EVInfoPage() {
  return (
    <div>
      <Menubar />
      <Card inverse>
        <CardImg
          alt="Information section background"
          src={infopageimage}
          className="info-background-image"
        />
        <CardImgOverlay className="overlay-content">
            <CardTitle tag="h5" className="overlay-title">Learn More About EVs</CardTitle>
        </CardImgOverlay>
      </Card>
      <hr className="separator" />
      <Container>
        <h2>EV Related Info</h2> {/* Header for the cards section */}
        <Row>
          <Col md="4">
            <Accordion title="Environmental Benefits of Electric Vehicles">
              <ListGroup>
                <ListGroupItem>EVs produce zero tailpipe emissions, reducing air pollution and smog.</ListGroupItem>
                <ListGroupItem>Even when charged from coal power, EVs emit fewer greenhouse gases than conventional vehicles.</ListGroupItem>
                <ListGroupItem>Over their lifecycle, EVs can reduce greenhouse gas emissions by approximately 57% compared to internal combustion engine vehicles.</ListGroupItem>
              </ListGroup>
            </Accordion>
          </Col>

          <Col md="4">
            <Accordion title="Government Incentives for EV Adoption">
              <ListGroup>
                <ListGroupItem>Federal tax credits and state/utility incentives help offset the initial higher cost of EVs.</ListGroupItem>
                <ListGroupItem>The Clean Vehicle Tax Credit provides benefits for new, used, and commercial clean vehicles.</ListGroupItem>
              </ListGroup>
            </Accordion>
          </Col>

          <Col md="4">
            <Accordion title="Affordable Access to EVs">
              <ListGroup>
                <ListGroupItem>Programs are available to make EVs more affordable, especially in low-income communities.</ListGroupItem>
                <ListGroupItem>Significant investments are being made to expand public EV charging infrastructure.</ListGroupItem>
              </ListGroup>
            </Accordion>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <Accordion title="Choosing and Using EVs">
              <ListGroup>
                <ListGroupItem>Differences between HEVs, PHEVs, and fully electric vehicles are crucial for potential buyers.</ListGroupItem>
                <ListGroupItem>Options for charging include slow Level 1 chargers and faster Level 2 chargers.</ListGroupItem>
              </ListGroup>
            </Accordion>
          </Col>

          <Col md="6">
            <Accordion title="Battery Life and Maintenance of EVs">
              <ListGroup>
                <ListGroupItem>Modern EV batteries are designed for an extended life, typically 12 to 15 years.</ListGroupItem>
                <ListGroupItem>Manufacturers often offer substantial warranties, reinforcing reliability and consumer confidence.</ListGroupItem>
              </ListGroup>
            </Accordion>
          </Col>
        </Row>

        <hr className="separator" />
        <h2>Sources</h2> {/* Header for the sources section */}
        <List type='unstyled'>
          <li>Popular Science</li>
          <li>Alternative Fuels Data Center</li>
          <li>ACEEE</li>
          <li>Vital Signs</li>
        </List>
      </Container>
    </div>
  );
}

// Custom Accordion component
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card className="accordion-card" color="dark" inverse>
      <CardHeader onClick={toggle} style={{ cursor: 'pointer' }}>
        <h5>{title}</h5>
        <span>{isOpen ? '▲' : '▼'}</span>
      </CardHeader>
      {isOpen && <CardBody>{children}</CardBody>}
    </Card>
  );
};

export default EVInfoPage;
