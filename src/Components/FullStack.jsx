import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import data from '../assets/data.json';
import CardView from './CardView';

const FullStack = () => {
    // Filter data for Full Stack Development
    const fullStackData = data.filter(item => item.type === 'FSD');

    return (
        <Container>
            <Row className="g-4">
                {fullStackData.map(item => (
                    <CardView key={item.id} item={item} />
                ))}
            </Row>
        </Container>
    );
};

export default FullStack;
