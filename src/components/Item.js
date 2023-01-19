import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import axios from "axios";


function Item(props){
        const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);

  const addToFav = async (makeup)=> {
    await axios.post(`${serverLink}/makeup`,makeup);
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.item.image_link} />
      <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Title>£ {props.item.price}</Card.Title>
        <Button variant="primary" onClick={()=>{addToFav(props.item)}}>Add to favorite</Button>
        {/* <Button variant="primary" onClick={()=> props.showUpdateModalProps(props.item)}>Update</Button>  */}
        

        
      </Card.Body>
    </Card>
  );
}

export default Item;

