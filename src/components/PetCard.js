import { Card } from 'react-bootstrap'

const PetCard = ({ props: {name} }) => {
  const imgPlaceHolder = "https://mylostpetalert.com/wp-content/themes/mlpa-child/images/nophoto.gif"

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img 
          variant="top" 
          src={ imgPlaceHolder} 
          //img ? img : (this would go in the src as a conditional)
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {/* <Link className="btn btn-outline-primary" to={`/product/${_id}`}>View</Link> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default PetCard;