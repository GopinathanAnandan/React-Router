import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CardView = ({ item }) => {
    // useNavigate hook from react-router-dom for programmatic navigation
    const navigate = useNavigate();
    // Function to handle card click event
    const handleCardClick = () => {
        // Navigate to the details page of the clicked item, encoding the title for the URL
        navigate(`/details/${encodeURIComponent(item.title)}`);
    };

    return (
        <Col xs={12} md={6} lg={4}>
            <Card className="h-100" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
                <Card.Img variant="top" src={item.img} alt={item.title} style={{ objectFit: 'cover', height: '200px' }} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{item.title}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardView;
