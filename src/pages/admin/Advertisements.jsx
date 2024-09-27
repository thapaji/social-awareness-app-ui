import React, { useState } from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import { Button, Card, Col, Row, Table, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEdit, FaPlus, FaToggleOn, FaToggleOff, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdvertisement, updateAdvertisement } from "../business/businessAction";

const Advertisements = () => {
  const dispatch = useDispatch();
  const advertisements = useSelector((state) => state.business.advertisements);
  const [loadingId, setLoadingId] = useState(null);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this advertisement?");
    if (confirmed) {
      setLoadingId(id);
      await dispatch(deleteAdvertisement(id));
      setLoadingId(null);
    }
  };

  const toggleStatus = ({ status, ...rest }) => {
    const newStatus = status === "active" ? "inactive" : "active";
    dispatch(updateAdvertisement(rest._id, { status: newStatus, ...rest }));
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
              <th>Status</th>
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
                <td>
                  <Button
                    variant={ad.status === "active" ? "success" : "danger"}
                    onClick={() => toggleStatus(ad)}
                  >
                    {ad.status === "active" ? <FaToggleOn /> : <FaToggleOff />}
                    {ad.status === "active" ? " Active" : " Inactive"}
                  </Button>
                </td>
                <td>
                  <Link to={`/admin/advertisements/edit/${ad._id}`}>
                    <Button variant="warning">
                      <FaEdit />
                    </Button>
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(ad._id)}
                    disabled={loadingId === ad._id}
                  >
                    {loadingId === ad._id ? (
                      <Spinner animation="border" size="sm" role="status" aria-hidden="true" />
                    ) : (
                      <FaTrash />
                    )}
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
