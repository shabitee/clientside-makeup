import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FavItem(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.item.makeupImageUrl} />
      <Card.Body>
        <Card.Title>{props.item.makeupName}</Card.Title>
        <Card.Title>{props.item.makeupPrice}</Card.Title>
        <Card.Text>{props.item.makeupDescription}</Card.Text>
        
        <Button variant="primary" onClick={()=>props.deleteMakeup(props.item._id)}>Delete</Button>
        <Button variant="primary" onClick={()=> props.showUpdateModalProps(props.item)}>Update</Button>
      </Card.Body>
    </Card>
  );
}

export default FavItem;