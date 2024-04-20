import React, { useState } from 'react';
import Menubar from '../sections/Menubar.js';
import { Container, Row, Col, Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap'; // Import Reactstrap components
import '../styles/landing.css'; // Import your CSS file
import EVsForAllImage from '../images/EVS FOR ALL.png'; 
import FindCarsandStationsimg from '../images/landingpageimg.png';
import LearnmoreImage from '../images/envbenefits.png';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

export default function Homepage() {
    // Define carousel items
        const items = [
            {
                src: FindCarsandStationsimg,
                altText: 'Find Cars and Stations',
                caption: 'Your One Stop Shop for EVs'
            },
            {
                src: LearnmoreImage,
                altText: 'Learn More',
                caption: 'Learn More About EVs Today'
            }
        ];

    // Initial state for carousel
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    // Function to handle next/previous slide
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const slides = items.map((item, index) => {
        return (
            <CarouselItem
                key={index}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    // Accordion items
    const accordionItems = [
        {
            title: "Obtain",
            content: [
                "Discover a wide range of EV models and compare their features to find the perfect fit for your needs.",
                "Explore financing options and learn about available incentives to make purchasing an EV more affordable.",
                "Get assistance in navigating the process of purchasing an EV, from researching to negotiating and finalizing the purchase."
            ]
        },
        {
            title: "Maintain",
            content: [
                "Explore the charging stations page to find nearby locations where you can charge your EV conveniently.",
                "Visit the info page to learn valuable tips on maintaining your EV's battery life and ensuring its longevity.",
                "Access resources and guides on routine maintenance tasks to keep your EV running smoothly and efficiently."
            ]
        },
        {
            title: "Sustain",
            content: [
                "Join community initiatives and programs focused on promoting sustainable transportation and reducing carbon emissions.",
                "Learn about eco-friendly driving practices and how to minimize your environmental impact while enjoying the benefits of EV ownership.",
                "Find resources for recycling and disposing of EV batteries responsibly to support a circular economy and minimize waste."
            ]
        }
    ];

    // State variable and function for accordion toggle
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        if (openAccordion === index) {
            setOpenAccordion(null);
        } else {
            setOpenAccordion(index);
        }
    }

    return (
        <div>
            <Menubar />
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={setActiveIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
            <hr className="separator" />
            <Container>
                <h2>Our Mission</h2>
                <Row>
                    <Col md="12">
                    <Card style={{ padding: '20px', margin: '20px 0', backgroundColor: 'black', color: 'white'  }}>
                        <CardBody>
                            <p>
                                Our mission at EVs For All is making EVs accessible to everyone. No matter where you come from or what your level of familiarity with EVs is, our platform equips you with the tools and resources you need to embrace the future of mobility confidently. Our application guides you through the entire process of obtaining, maintaining, and sustaining an EV car, ensuring a seamless and enjoyable experience. Take the first step towards sustainable transportation today!
                            </p>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    {accordionItems.map((item, index) => (
                        <Col md="4" key={index}>
                            <Accordion title={item.title} isOpen={openAccordion === index} onToggle={() => toggleAccordion(index)}>
                                <ListGroup>
                                    {item.content.map((content, idx) => (
                                            <ListGroupItem key={idx} style={{ color: 'white', backgroundColor: 'black' }}>
                                                {content}
                                            </ListGroupItem>
                                    ))}
                                </ListGroup>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

// Custom Accordion component
const Accordion = ({ title, isOpen, onToggle, children }) => {
    return (
        <Card className="accordion-card" style={{ backgroundColor: 'black' }}>
            <CardHeader onClick={onToggle} style={{ cursor: 'pointer' }}>
                <h5 style={{ color: 'white' }}>{title}</h5>
                <span style={{ color: 'white' }}>{isOpen ? '▲' : '▼'}</span>
            </CardHeader>
            {isOpen && <CardBody>{children}</CardBody>}
        </Card>
    );
};
