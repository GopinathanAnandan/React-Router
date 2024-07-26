import React from 'react';
import { Container, Row } from 'react-bootstrap';
import data from '../assets/data.json'; // Adjust path as needed
import CardView from './CardView';


const All = () => {
    return (
        <Container>
            <Row className="g-4">
                {/* Map through the data array and render a CardView for each item */}
                {data.map(item => (
                    <CardView key={item.id} item={item} /> // Render CardView component with a unique key and item prop
                ))}
            </Row>
        </Container>
    );
};

export default All;

