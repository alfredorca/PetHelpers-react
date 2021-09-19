import { Link } from "react-router-dom";
import "../viewsstyle/CustomerPortalView.css";
import { useEffect, useState } from "react";
import { postPetToApi } from "../services/petService";
import { Button, Form } from "react-bootstrap";
import { getSpeciesFromApi } from "../services/speciesService";
import { useHistory } from "react-router";
import { getUserFromApi, getUserPetsFromApi } from "../services/userService";
import PetCard from "../components/PetCard";
import { Card } from 'react-bootstrap'
import { isAuthenticated, logOut } from "../services/authService";

const ProviderPortalView = () => {
  const [pet, setPet] = useState({
    name: "",
    type: "",
  });
  const [species, setSpecies] = useState([]);
  const [userPets, setUserPets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [noPetView, setNoPetView] = useState(true);

  const history = useHistory();

  const hasPets = () => {
    let token = localStorage.getItem("jwtpethelpers");
    const tokenObject = JSON.parse(token);
    if (!tokenObject.pet) return false;
    return true;
  };

  // const getProducts = async () => {
  //   try {
  //     const response = await getProductsFromApi();
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.log("Server not working")
  //   }
  // }

  const getPets =  () => {
    try {
      let token =  localStorage.getItem("jwtpethelpers");
      const tokenObject =  JSON.parse(token);
      let userID =  tokenObject._id;
      let user =  getUserPetsFromApi(userID)
      setUserPets(user.pets);
    } catch (error) {
      console.log("not working dude");
    }
  };

  function handleChange(event) {
    setPet({
      ...pet,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    getPets();
  }, []);

  // const getSpecies = async () => {
  //   const response = await getSpeciesFromApi();
  //   setSpecies(response.data);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    postPetToApi(pet);
    history.push("/customerportal");
  };

  const schedulealert = () => {
    alert('You have sent the user a request to schedule the service!')
  }
  

  return (
    <section className="CustomerPortalViewMain">
      <div className="customerContainer">
        <div className="customerSection">
          <div className="customerList">
            <ul>
              <li>
                No notifications! 😁
              </li>
            </ul>
          </div>
          <div className="contentContainer">
            <h2>Good to see you!</h2>

            <>
      <Card style={{ width: "18rem", marginLeft: '35%', marginTop: '5%' }}>
        <Card.Img 
          variant="top" 
          src='https://www.rover.com/blog/wp-content/uploads/2018/12/chihuahua-820087_1920.jpg' 
          //img ? img : (this would go in the src as a conditional)
        />
        <Card.Body>
          <Card.Title>{'Possible Customers: Vito'}</Card.Title>
          <Card.Text> Needs: haircut</Card.Text>
          <Button onClick= {schedulealert}>Help this Pet!</Button>
          {/* <Link className="btn btn-outline-primary" to={`/product/${_id}`}>View</Link> */}
        </Card.Body>
      </Card>
    </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderPortalView;