
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Careers.css';

function Careers() {
    return (
        <Container >
            <header className="text-center mb-4">
                <h2>Join Our Team</h2>
                <p>We're looking for talented individuals to help us grow. Check out our current openings below!</p>
            </header>

            <section>
                <h2 className="mb-4">Current Openings</h2>
                <Row >
                    <Col md={6} lg={4} className="mb-4">
                        <Card className="careercard">
                            <Card.Body>
                                <Card.Title>Software Engineer</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Location: Bengaluru, Karnataka</Card.Subtitle>
                                <Card.Text>
                                    Develop and maintain our web applications. Collaborate with the team to deliver high-quality software.
                                </Card.Text>
                                <Card.Text>
                                    <strong>Requirements:</strong> Proficiency in JavaScript, React, and Node.js.
                                </Card.Text>
                                <Button variant="primary">Apply Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={4} className="mb-4">
                        <Card className="careercard">
                            <Card.Body>
                                <Card.Title>Product Manager</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Location: Chennai, Tamil Nadu</Card.Subtitle>
                                <Card.Text>
                                    Oversee the development of new features and products. Work with cross-functional teams to achieve business goals.
                                </Card.Text>
                                <Card.Text>
                                    <strong>Requirements:</strong> Experience in product management and agile methodologies.
                                </Card.Text>
                                <Button variant="primary">Apply Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <Card className="careercard">
                            <Card.Body>
                                <Card.Title>Data Analyst</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Location: Remote</Card.Subtitle>
                                <Card.Text>
                                    Analyze and interpret complex data sets to provide insights for business decision-making.
                                </Card.Text>
                                <Card.Text>
                                    <strong>Requirements:</strong> Strong analytical skills and proficiency in data visualization tools.
                                </Card.Text>
                                <Button variant="primary">Apply Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>

            <footer className="text-center mt-4">
                <p>Interested in applying? Send your resume and cover letter to <a href="mailto:careers@example.com">careers@example.com</a>.</p>
            </footer>
        </Container>
    );
}


export default Careers