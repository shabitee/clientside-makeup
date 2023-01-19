import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";

function UpdateMakeupModal(props) {
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);

  const updateItemInfo = async (e) => {
    e.preventDefault();
    const itemData = {
      makeupName: e.target.name.value,
      makeupImageUrl: e.target.img.value,
      makeupPrice: e.target.price.value,


    };
    console.log(itemData);
    const resultsUpdate = await axios.put(`${serverLink}/makeup/${props.itemIndex}`,itemData);
    props.handleClose();
    props.updateMakeup(resultsUpdate.data)
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={updateItemInfo}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.makeupName}
              type="text"
              name="name"
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.makeupPrice}
              type="text"
              name="price"
            />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.makeupImageUrl}
              type="text"
              name="img"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Item
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateMakeupModal;
