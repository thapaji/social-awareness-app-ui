import React, { useEffect } from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { getCauses } from "./causeAction";
import { deleteCause } from "./causeAxios";

const AdminCauses = () => {
  const dispatch = useDispatch();
  const causes = useSelector((state) => state.causes.causes);

  useEffect(() => {
    dispatch(getCauses());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCause(id));
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
              <Button variant="primary"><FaPlus/></Button>
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
                <td>{cause.title}</td>
                <td>{cause.description}</td>
                <td>{cause.category}</td>
                <td>{cause.createdBy}</td>
                <td>
                  <Link to={`/admin/causes/edit/${cause._id}`}>
                    <Button variant="warning">
                      <FaEdit />
                    </Button>
                  </Link>
                  <Button variant="danger" onClick={() => handleDelete(cause._id)}>
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

export default AdminCauses;
