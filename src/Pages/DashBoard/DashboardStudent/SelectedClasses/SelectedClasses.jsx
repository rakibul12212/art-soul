import { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import ShowClassStudent from "../ShowClassStudent/ShowClassStudent";


const SelectedClasses = () => {
  const [myClasses, setMyClasses] = useState([]);
  const { user, admin } = useAuth();
  // For Status Showing
  const showBtn = false;

  useEffect(() => {

    fetch("https://artsoul.onrender.com/orders/manageAllOrders")
      .then((res) => res.json())
      .then((data) => setMyClasses(data));
  }, []);
  // Checking With Email
  const check = myClasses.filter((myClasses) =>myClasses.email === user.email);
  //   DELETE AN USER
  const handleDeleteUser = (_id) => {
    const proceed = window.confirm("Are you sure You want to delete ? ");
    if (proceed) {
      const url = `https://artsoul.onrender.com/order/delete/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())

        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted SuccessFully");
            const remainingUsers = myClasses.filter((user) => user._id !== _id);
            setMyClasses(remainingUsers);
          }
        });
    }
  };
  return (
    <Container>
    {admin ? (
      <Container>
        <Row>
          <h3 className="text-center fw-bold">
            Welcome back ADMIN {user.displayName}.
            <br />
          </h3>
          <Col xs={10} md={6} className="mx-auto my-5">
            <Image
              src="https://cise-egypt.com/wp-content/uploads/2019/09/WELCOME-ST-IVES.jpg"
              rounded
              fluid
            />
          </Col>
        </Row>
      </Container>
    ) : (
      <Container>
        {check ? (
          <h2 className="text-center fw-bold mt-4 fs-1 text-dark">
            {user.displayName}
            <span className="text-warning"> Selected Classes</span>{" "}
          </h2>
        ) : (
          " "
        )}
        <Row xs={1} md={3} className="g-4" style={{ margin: "20px" }}>
          {check?.map((order) => (
            <ShowClassStudent
              order={order}
              key={order._id}
              handleDeleteUser={handleDeleteUser}
              showBtn={showBtn}
            ></ShowClassStudent>
          ))}
        </Row>
       
      </Container>
    )}
  </Container>
  );
};

export default SelectedClasses;