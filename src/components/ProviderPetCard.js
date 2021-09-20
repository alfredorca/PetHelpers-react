import { Button, Card } from "react-bootstrap";

const ProviderPetCard = ({ props: {name, type}}) => {
  let imgPlaceHolder =
    "https://mylostpetalert.com/wp-content/themes/mlpa-child/images/nophoto.gif";
  
    const handleAlarm = () => {
      alert('You have sent a request to take care of this pet!')
    }

  return (
    <>
      <Card style={{ width: "18rem", marginBottom:'5vh' }}>
        <Card.Img
          variant="top"
          src={imgPlaceHolder}
          //img ? img : (this would go in the src as a conditional)
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Species: {type.name}
          </Card.Text>
          <Button onClick={handleAlarm}>Offer service</Button>
          {/* <Link className="btn btn-outline-primary" to={`/product/${_id}`}>View</Link> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default ProviderPetCard;
