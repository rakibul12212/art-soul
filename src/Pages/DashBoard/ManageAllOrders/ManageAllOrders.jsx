import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import ShowClasses from "../MyClass/ShowClasses";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [isStatus] = useState(true);
  const showBtn = true;
  useEffect(() => {
    fetch("https://artsoul.onrender.com/orders/manageAllOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

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
            const remainingUsers = allOrders.filter((user) => user._id !== _id);
            setAllOrders(remainingUsers);
          }
        });
    }
  };
  const handleStatus = (_id) => {
    const url = `https://artsoul.onrender.com/status/${_id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ isStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("This Booking Is Approved");
          const remainingUsers = allOrders.filter((user) => user._id !== _id);
          const upDatedUser = allOrders.find((order) => order._id === _id);
          upDatedUser.status = true;
          setAllOrders([...remainingUsers, upDatedUser]);
        }
      });
  };
  return (
    <Container>
      <h2 className="text-center fw-bold mt-4 fs-1 text-dark">
        All Clients
        <span className="text-warning"> Booking</span>{" "}
      </h2>

      <Row xs={1} md={3} className="g-4" style={{ margin: "20px" }}>
        {allOrders.map((allOrders) => (
          <ShowClasses
            key={allOrders._id}
            order={allOrders}
            handleDeleteUser={handleDeleteUser}
            handleStatus={handleStatus}
            showBtn={showBtn}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ManageAllOrders;