import React from 'react';
import BlobImage from './BlobImage'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Profile = (props) => {
    return(
        <Row className="holdProfile d-flex justify-content-center align-items-center my-3">
            <Col xs={12} md={6}className="text-center">
                <BlobImage image = {props.image} imageAlt="" type="profile" blobNumber={props.shapeNum} />
            </Col>
            <Col xs={12} md={6} className="text-center text-md-start">
                <h3 className="h5">{props.name}</h3>
                <p>{props.blurb}</p>
            </Col>
        </Row>
    );
}

export default Profile;