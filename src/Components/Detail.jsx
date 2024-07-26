import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import data from '../assets/data.json';

const Detail = () => {
    // Retrieve the 'title' parameter from the URL
    const { title } = useParams();
    // Find the item in the data array that matches the decoded 'title' parameter
    const item = data.find(d => d.title === decodeURIComponent(title));
    // If no item is found, display a 'Item not found' message
    if (!item) {
        return <p>Item not found</p>;
    }

    return (
        <Container className="my-5">
            <Card className="detailcard">
                <Card.Img variant="top" src={item.img} alt={item.title} style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        <p>{item.description || "No description available."}</p>  {/* Display the item's description or a default message */}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Detail;