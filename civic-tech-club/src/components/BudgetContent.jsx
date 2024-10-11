import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BudgetVis from './BudgetVis';

const BudgetContent = () => {
    return (
        <Container className="content-container">
            <Row className="m-5">
                <Col xs={12} >
                    <h1>City of London Budget Visualizations</h1>
                    <p>This project is intended to help people visualize the information provided in the budget <a href="https://london.ca/government/property-taxes-finance/municipal-budget/2024-2027-business-plans">Business Plan documents</a></p>
                    <p><strong>Note:</strong> All monetary values are in 000s of dollars</p>
         
                </Col>

            </Row>
            <Row className="m-5">
               <BudgetVis/>

            </Row>
        </Container>
    );
};

export default BudgetContent;