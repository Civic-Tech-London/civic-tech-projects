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
                    <p>Most information was available in the city of london <a href="https://london.ca/government/property-taxes-finance/municipal-budget/2024-2027-business-plans">business plans </a>. However the London Police services information was not available in this format, and was instead taken from pages 171 - 175 and pages 209 - 210 in the <a href="https://london.ca/sites/default/files/2024-05/2024-2027%20Multi-Year%20Budget.pdf">London City Budget </a>.The land ambulance information was found on pages 178 of the city budget </p>
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