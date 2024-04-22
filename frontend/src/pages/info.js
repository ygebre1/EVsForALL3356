import React from 'react';
import Menubar from '../sections/Menubar.js';
import { Container, Row, Col, ListGroup, List, ListGroupItem, Card,CardHeader, CardImg, CardImgOverlay,CardTitle, CardBody } from 'reactstrap';
import '../styles/info.css'; // Import custom CSS for styling
import infopageimage from '../images/infopage.png';
import Footer from '../sections/Footer.js';

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
                <ListGroupItem>Electric vehicles (EVs) produce zero tailpipe emissions, reducing air pollution and smog. This helps improve air quality in urban areas and mitigates health risks associated with conventional vehicle emissions.
                </ListGroupItem>
                <ListGroupItem> Even when charged from coal power, EVs emit fewer greenhouse gases than conventional vehicles. This is due to the higher efficiency of electric motors compared to internal combustion engines and the potential for cleaner energy sources.
                </ListGroupItem>
                <ListGroupItem>Over their lifecycle, EVs can reduce greenhouse gas emissions by approximately 57% compared to internal combustion engine vehicles. This reduction includes emissions from manufacturing, fuel production, and vehicle operation.
                </ListGroupItem>
              </ListGroup>
            </Accordion>
          </Col>

          <Col md="4">
          <Accordion title="Government Incentives for EV Adoption">
            <ListGroup>
              <ListGroupItem>
                Federal tax credits and state/utility incentives help offset the initial higher cost of EVs. These incentives encourage consumers to choose electric vehicles by reducing the upfront purchase price or providing tax benefits.
              </ListGroupItem>
              <ListGroupItem>
                The Clean Vehicle Tax Credit provides benefits for new, used, and commercial clean vehicles. This incentive program supports the adoption of electric and other alternative fuel vehicles to reduce emissions and dependence on fossil fuels.
              </ListGroupItem>
              <ListGroupItem>
                Some states offer additional perks such as access to carpool lanes, reduced registration fees, or free parking for electric vehicle owners. These incentives aim to further incentivize EV adoption and reward environmentally conscious transportation choices.
              </ListGroupItem>
            </ListGroup>
          </Accordion>
          </Col>

          <Col md="4">

          <Accordion title="Affordable Access to EVs">
            <ListGroup>
              <ListGroupItem>
                Programs are available to make EVs more affordable, especially in low-income communities. These initiatives may include grants, rebates, or financing options tailored to individuals with limited financial resources.
              </ListGroupItem>
              <ListGroupItem>
                Significant investments are being made to expand public EV charging infrastructure. This infrastructure expansion aims to address range anxiety and facilitate widespread adoption of electric vehicles by providing convenient and accessible charging options.
              </ListGroupItem>
              <ListGroupItem>
                Some electric utilities offer special rates or incentives for EV owners, such as off-peak charging discounts or rebates for installing home charging stations. These programs help reduce the cost of EV ownership and encourage off-peak charging to optimize grid usage.
              </ListGroupItem>
            </ListGroup>
          </Accordion>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <Accordion title="Choosing and Using EVs">
            <ListGroup>
              <ListGroupItem>
                Understanding the differences between Hybrid Electric Vehicles (HEVs), Plug-in Hybrid Electric Vehicles (PHEVs), and fully electric vehicles is crucial for potential buyers. Each type of EV has distinct characteristics and charging requirements that influence suitability for different driving habits and lifestyles. Hybrid Electric Vehicles (HEVs) combine an internal combustion engine (ICE) with an electric motor, offering improved fuel efficiency without external charging. Plug-in Hybrid Electric Vehicles (PHEVs) feature both ICE and electric motor, with larger battery packs that can be externally charged for extended all-electric range. Fully Electric Vehicles (EVs) are powered entirely by electricity, requiring external charging infrastructure and offering zero tailpipe emissions and long-term cost savings.
              </ListGroupItem>
              <ListGroupItem>
                Options for charging include slow Level 1 chargers that use a standard household outlet and faster Level 2 chargers that require a dedicated charging station. Charging infrastructure availability and charging speeds influence EV adoption and convenience for owners.
              </ListGroupItem>
              <ListGroupItem>
                EV owners can also consider alternative charging options, such as public fast chargers or DC fast chargers, for quicker charging times during long-distance travel. Understanding the charging network and planning routes accordingly can enhance the EV ownership experience and reduce range anxiety.
              </ListGroupItem>
            </ListGroup>
            </Accordion>
          </Col>

          <Col md="6">
            <Accordion title="Battery Life and Maintenance of EVs">
            <ListGroup>
              <ListGroupItem>
                Modern EV batteries are designed for an extended life, typically 12 to 15 years, depending on usage patterns and environmental factors. Battery longevity is a key consideration for EV owners and contributes to overall vehicle reliability and resale value.
              </ListGroupItem>
              <ListGroupItem>
                Manufacturers often offer substantial warranties on EV batteries, reinforcing reliability and consumer confidence. These warranties provide peace of mind to buyers and cover potential defects or degradation issues during the warranty period.
              </ListGroupItem>
              <ListGroupItem>
                Regular maintenance tasks for EVs include checking and replacing brake pads, inspecting tire condition and pressure, and monitoring coolant levels. While EVs have fewer moving parts and require less maintenance than traditional vehicles, routine upkeep is still necessary to ensure optimal performance and longevity.
              </ListGroupItem>
            </ListGroup>
            </Accordion>
          </Col>
        </Row>

        <hr className="separator" />
        <h2>Sources</h2> {/* Header for the sources section */}
        <List type='inline' className="sources-list">
    <li><a href="https://www.popsci.com/search/EV+cars/">Popular Science</a></li>
    <li><a href="https://afdc.energy.gov/">Alternative Fuels Data Center</a></li>
    <li><a href="https://www.aceee.org/search/site?keys=EV+cars">ACEEE</a></li>
  </List>
      </Container>
      <Footer />
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
    <Card className="accordion-card" style={{ backgroundColor: 'black' }}>
      <CardHeader onClick={toggle} style={{ cursor: 'pointer' }}>
        <h5 style={{ color: 'white' }}>{title}</h5>
        <span style={{ color: 'white' }}>{isOpen ? '▲' : '▼'}</span>
      </CardHeader>
      {isOpen && <CardBody>{children}</CardBody>}
    </Card>
  );
};

export default EVInfoPage;
