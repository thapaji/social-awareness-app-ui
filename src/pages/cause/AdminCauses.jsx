import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import { Table, Button, Row, Col, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { getCauses, removeCause } from "./causeAction";

const AdminCauses = () => {
  const dispatch = useDispatch();
  const causes = useSelector((state) => state.causes.causes);
  const [loadingId, setLoadingId] = useState(null);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this cause?");
    if (confirmed) {
      setLoadingId(id);
      await dispatch(removeCause(id));
      setLoadingId(null);
    }
  };

  return (
    <AdminLayout>
      <div className="accent-bg p-4">
        <Row>
          <Col>
            <h1 className="dash-heading">Causes</h1>
          </Col>
          <Col className="text-end">
            <Link to="/admin/causes/add">
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
              <th>Description</th>
              <th>Category</th>
              <th>Created By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {causes.map((cause) => (
              <tr key={cause._id}>
                <td>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        {cause.title.length > 10 ? cause.title.slice(0, 15) + "..." : cause.title}
                      </Card.Title>
                    </Card.Body>
                    <Card.Img variant="bottom" src={cause.image} />
                  </Card>
                </td>
                <td>{cause.description.slice(0, 140) + "..."}</td>
                <td>{cause.category}</td>
                <td>{cause.createdBy}</td>
                <td>
                  <Link to={`/admin/causes/edit/${cause._id}`}>
                    <Button variant="warning">
                      <FaEdit />
                    </Button>
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(cause._id)}
                    disabled={loadingId === cause._id}
                  >
                    {loadingId === cause._id ? (
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

export default AdminCauses;
