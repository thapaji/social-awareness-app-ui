import React from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import { Button, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Advertisements = () => {
  const dispatch = useDispatch();
  const advertisements = useSelector((state) => state.business.advertisements);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      dispatch(deleteEvent(id));
    }
  };
  return (
    <AdminLayout>
      <div className="accent-bg p-4">
        <Row>
          <Col>
            <h1 className="dash-heading">Advertisements</h1>
          </Col>
          <Col className="text-end">
            <Link to="/admin/advertisements/add">
              <Button variant="primary">
                <FaPlus />
              </Button>
            </Link>
          </Col>
        </Row>

        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Business</th>
              <th>Description</th>
              <th>Created By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {advertisements.map((ad) => (
              <tr key={ad._id}>
                <td>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        {ad.title.length > 10 ? ad.title.slice(0, 15) + "..." : ad.title}
                      </Card.Title>
                    </Card.Body>
                    <Card.Img variant="bottom" src={ad.image} />
                  </Card>
                </td>
                <td>{ad.business}</td>
                <td>{ad.description}</td>
                <td>{ad.createdBy}</td>
                <td>
                  <Link to={`/admin/advertisements/edit/${ad._id}`}>
                    <Button variant="warning">
                      <FaEdit />
                    </Button>
                  </Link>
                  <Button variant="danger" onClick={() => handleDelete(ad._id)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default Advertisements;
