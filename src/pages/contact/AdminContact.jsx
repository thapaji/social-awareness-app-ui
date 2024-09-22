import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import { Button, Col, Row, Table, Modal } from "react-bootstrap";
import { FaTrash, FaEnvelope, FaEnvelopeOpen } from "react-icons/fa";
import { removeMessage, modifyMessage } from "./contactAction"; // Ensure correct imports

const AdminContact = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.contact.messages);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    dispatch(removeMessage(id));
  };

  const handleRowClick = (message) => {
    // Mark the message as read
    dispatch(modifyMessage(message._id, { ...message, status: "read" }, false));
    setSelectedMessage(message);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMessage(null);
  };

  return (
    <AdminLayout>
      <div className="accent-bg p-4">
        <Row>
          <Col>
            <h1 className="dash-heading">Messages</h1>
          </Col>
        </Row>

        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr
                key={message._id}
                onClick={() => handleRowClick(message)}
                style={{ cursor: "pointer" }}
              >
                <td className={message.status === "unread" ? "text-success fw-bold" : ""}>
                  {message.name.length > 10 ? message.name.slice(0, 15) + "..." : message.name}
                </td>
                <td className={message.status === "unread" ? "text-success fw-bold" : ""}>
                  {message.status === "unread" ? (
                    <>
                      <FaEnvelope className="me-2" /> Unread
                    </>
                  ) : (
                    <>
                      <FaEnvelopeOpen className="me-2" /> Read
                    </>
                  )}
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(message._id);
                    }}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Modal for displaying message details */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Message from {selectedMessage?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Phone:</strong> {selectedMessage?.phone}
            </p>
            <p>
              <strong>Message:</strong>
            </p>
            <p>{selectedMessage?.message}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default AdminContact;
