import { Button, Card } from "react-bootstrap";

const PetCard = ({ props: {name, type}}) => {
  let imgPlaceHolder =
    "https://mylostpetalert.com/wp-content/themes/mlpa-child/images/nophoto.gif";

    const handleAlert = () => {
      alert('This pet will now be showed to all Providers as a possible customer')
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
          <Button onClick={handleAlert}>Request service</Button>
          {/* <Link className="btn btn-outline-primary" to={`/product/${_id}`}>View</Link> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default PetCard;
