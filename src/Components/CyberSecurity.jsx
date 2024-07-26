import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import data from '../assets/data.json'; // Adjust path as needed
import CardView from './CardView';

const CyberSecurity = () => {
    // Filter data for Cyber Security
    const cyberSecurityData = data.filter(item => item.type === 'Cyber Security');

    return (
        <Container>
            <Row className="g-4">
                {cyberSecurityData.map(item => (
                    <CardView key={item.id} item={item} />
                ))}
            </Row>
        </Container>
    );
};

export default CyberSecurity;
