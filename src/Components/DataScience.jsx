import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import data from '../assets/data.json'; // Adjust path as needed
import CardView from './CardView';

const DataScience = () => {
    // Filter data for Data Science
    const dataScienceData = data.filter(item => item.type === 'Data Science');

    return (
        <Container>
            <Row className="g-4">
                {dataScienceData.map(item => (
                    <CardView key={item.id} item={item} />
                ))}
            </Row>
        </Container>
    );
};

export default DataScience;
