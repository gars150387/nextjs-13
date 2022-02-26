import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap'

export const CityFormat = ({ name, state, country, lat, lon }) => {
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {state} / {country}
            </Card.Text>            <Card.Text>
                {lat} / {lon}
            </Card.Text>
            <Button variant="primary">Select</Button>
        </Card.Body>
    </Card>
}