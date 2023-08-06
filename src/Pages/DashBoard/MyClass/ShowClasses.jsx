import React from 'react';
import PropTypes from 'prop-types';
import {  Card, Col } from 'react-bootstrap';
import { Button } from 'flowbite-react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckIcon from '@mui/icons-material/Check';
const ShowClasses = (props) => {
    const { className,instructorImage,instructorName,price, availableSeats,  details, classImage} =
    props.order.cart[0];
  const { _id, status } = props.order;
    return (
        <div>
        <Col className="h-100">
          <Card variant=" mx-auto " className="h-100">
            <Card.Img variant="top p-3  " src={classImage} className="rounded" />
            <Card.Body>
              <Card.Title>
                {" "}
                <strong className="fw-bold">{className},</strong>{" "}
                <small>{availableSeats}</small>
              </Card.Title>
              <Card.Text className="d-flex justify-content-between align-items-center">
                {" "}
                
                <span className="  p-2 price">
                  <strong className="fw-bold fs-4">Just $</strong>{" "}
                  <strong className="fw-bold fs-4"></strong>{" "}
                  <span className="text-danger price">{price}</span>
                </span>
              </Card.Text>
              <Card.Text>
                {" "}
                <span className="text-muted">{details}</span>{" "}
              </Card.Text>
              <Card.Text>
                {" "}
                <small className="">
                  {" "}
                  Instructor Name : <span className="fw-bold"> {instructorName}</span>
                </small>{" "}
              </Card.Text>
              <Card.Text>
                {" "}
                <small className="">
                  {" "}
                  User Name : <span className="fw-bold"> {props.order.name}</span>
                </small>{" "}
              </Card.Text>
              <Card.Text>
                {status === true ? (
                  <small className="">
                    Status: <span className="text-success">Approved</span>{" "}
                  </small>
                ) : (
                  <span className="">
                    Status: <span className="text-danger">Pending</span>{" "}
                  </span>
                )}
              </Card.Text>
            </Card.Body>
            <Card.Footer className=" d-flex justify-content-between align-items-center">
              
  
              <small className="text-muted">
                {props.showBtn === true ? (
                  <Button
                    onClick={() => props.handleStatus(_id)}
                    variant={
                      status ? "outline-success mb-2" : "outline-dark mb-2"
                    }
                  >
                    <CheckIcon/>
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
                  <HighlightOffIcon/>
                </Button>
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </div>
    );
};
ShowClasses.propTypes = {
    order: PropTypes.shape({
      className: PropTypes.string.isRequired,
      instructorImage: PropTypes.string.isRequired,
      instructorName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      availableSeats: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      days: PropTypes.array.isRequired,
      details: PropTypes.string.isRequired,
      classImage: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
  };
ShowClasses.propTypes = {
    showBtn: PropTypes.bool.isRequired,
    handleStatus: PropTypes.func.isRequired,
    // Other prop validations...
};
ShowClasses.propTypes = {
    handleDeleteUser: PropTypes.func.isRequired,
    
  };
export default ShowClasses;