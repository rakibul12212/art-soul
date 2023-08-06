import React from 'react';
// import { Button, Card, Col } from 'react-bootstrap';
// import { Card, Col, NavLink, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './ShowClassStudent.css'
import useClasses from '../../../Hooks/useClasses';

const ShowClassStudent = (props) => {
  // console.log(props.order)
  const {classes}=useClasses()
  const { classImage, price, place, rating, date, className } =
  props.order.cart[0]
const { _id, status } = props.order;
    return (
       
      <div>
      <Col className="h-100">
        <Card variant=" mx-auto " className="h-100">
          <Card.Img variant="top p-3  " src={classImage} className="rounded" />
          <Card.Body>
            <Card.Title>
              {" "}
              <strong className="fw-bold">{className}</strong>{" "}
              
            </Card.Title>
            <Card.Text className="d-flex justify-content-between align-items-center">
              {" "}
              <span className="text-muted">{date}</span>
              <span className="  p-2 price">
                <strong className="fw-bold fs-4">Just $</strong>{" "}
                <strong className="fw-bold fs-4"></strong>{" "}
                <span className="text-danger price">{price}</span>
              </span>
            </Card.Text>
            
            <Card.Text>
              {" "}
              <small className="">
                {" "}
                Booked By : <span className="fw-bold"> {props.order.name}</span>
              </small>{" "}
            </Card.Text>
            <Card.Text>
              {status === true ? (
                <small className="">
                  Status: <span className="text-success">Shipped</span>{" "}
                </small>
              ) : (
                <span className="">
                  Status: <span className="text-danger">Pending</span>{" "}
                </span>
              )}
            </Card.Text>
          </Card.Body>
          <Card.Footer className=" d-flex justify-content-between align-items-center">
            <span>
              
            </span>

            <small className="text-muted">
              {props.showBtn === true ? (
                <Button
                  onClick={() => props.handleStatus(_id)}
                  variant={
                    status ? "outline-success mb-2" : "outline-dark mb-2"
                  }
                >
                  <i className="fas fa-check-circle fs-4"></i>
                </Button>
              ) : (
                ""
              )}
            </small>
            <small className="text-muted">
              <Button
                onClick={() => props.handleDeleteUser(_id)}
                variant="outline-danger mb-2"
              >
                <i className="far fa-times-circle fs-4"></i>
              </Button>
            </small>
          </Card.Footer>
        </Card>
      </Col>
    </div>
        
    );
};

export default ShowClassStudent;