import React from 'react';
import { Card, Button, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS

// Car component to display car details
const Car = ({ car, price }) => {
    return (
        <Card className="mb-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={car.photo_url} alt={`${car.manufacturer_name} ${car.model}`} />
            <Card.Body>
                <Card.Title>{car.manufacturer_name} {car.model}</Card.Title>
                <Card.Text>
                    Year: {car.model_year}
                </Card.Text>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>More Info</Accordion.Header>
                        <Accordion.Body>
                            Electric Range: {car.electric_range} miles<br />
                            Fuel Type: {car.fuel_name}<br />
                            Drivetrain: {car.drivetrain}<br />
                            Seating Capacity: {car.seating_capacity}<br />
                            Price: ${price}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>
    );
};

export default Car;
