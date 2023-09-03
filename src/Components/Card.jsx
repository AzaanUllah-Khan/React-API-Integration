import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card2(props) {
  return (
    <Card style={{ width: '19rem', marginBottom: "20px"}}>
      <Card.Img variant="top" src={props.img} style={{width: "100%", height: "300px" , objectFit: "cover"}} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Card2;