import React, { useState } from 'react'
import {Form, Row} from "react-bootstrap"

function HomeEmployee(props) {
    
    
    return (
        <Row className="mt-2">
        <Form.Control
        value={props.data}
                    type="text"
                    placeholder="Enter value in child"
                    onChange={props.changeData}
                    className="my-2"
                  /> 
                  </Row>   
    )
}

export default HomeEmployee
