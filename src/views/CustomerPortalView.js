import { Link } from "react-router-dom";
import "../viewsstyle/CustomerPortalView.css";
import { useEffect, useState } from "react";
import { postPetToApi } from "../services/petService";
import { Button, Form } from "react-bootstrap";
import { getSpeciesFromApi } from "../services/speciesService";
import { useHistory } from "react-router";
import { getUserFromApi } from "../services/userService";
import PetCard from "../components/PetCard";
import { isAuthenticated } from "../services/authService";

const CustomerPortalView = () => {
  let {user: {_id}} = isAuthenticated();
  const [pet, setPet] = useState({
    name: "",
    type: "",
  });
  const [species, setSpecies] = useState([]);
  const [userPets, setUserPets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [noPetView, setNoPetView] = useState(true);
  
  const history = useHistory();
  
  useEffect(() => {
    getPets();
    console.log(_id);
  }, []);

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

  const getPets = async () => {
    try {
      let token = localStorage.getItem("jwtpethelpers");
      const tokenObject = await JSON.parse(token);
      let userID = tokenObject._id;
      let user =  (await getUserFromApi(_id)).data
      // console.log(user.pets)
      // console.log('hello')
       setUserPets(user.pets);
    } catch (error) {
      console.log('hello world')
      console.log("not working dude");
    }
  };

  function handleChange(event) {
    setPet({
      ...pet,
      [event.target.name]: event.target.value,
    });
  }


  // const getSpecies = async () => {
  //   const response = await getSpeciesFromApi();
  //   setSpecies(response.data);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    postPetToApi(pet);
    history.push("/customerportal");
  };

  return (
    <section className="CustomerPortalViewMain">
      <div className="customerContainer">
        <div className="customerSection">
          <div className="customerList">
            <ul>
              <li>
                <Link className="customerLink" to="/">
                  Pets
                </Link>
              </li>
              <li>
                <Link className="customerLink" to="/">
                  Your info
                </Link>
              </li>
              <li>
                <Link className="customerLink" to="/">
                  Log out
                </Link>
              </li>
            </ul>
          </div>
          <div className="contentContainer">
            <h2>Good to see you!</h2>

            {!hasPets ? (
              noPetView && (
                <div className="NoPetYet">
                  <h4>It looks like you don't have pets yet!</h4>
                  <p>Would you like to add one?</p>
                  <Button
                    onClick={() => {
                      setShowForm(true);
                      setNoPetView(false);
                    }}
                  >
                    {" "}
                    Add Pet
                  </Button>
                </div>
              )
            ) : (
              <>
                <div className="container mt-5">
                  <div className="row">
                    {userPets &&
                      userPets.map((userPet) => (
                        <div key={userPet} className="col">
                          <PetCard props={userPet}/>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}

            {showForm && (
              <div>
                <Form className="addPetForm">
                  <Form.Group size="lg" controlId="petName">
                    <Form.Label>Pet's Name</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Pet's name"
                      value={pet.name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <label>What kind of pet do you have? </label>
                  <select
                    onChange={handleChange}
                    name="type"
                    className="form-control"
                  >
                    <option>Select a species</option>
                    {species.map((singlespecies) => (
                      <option key={singlespecies._id} value={singlespecies._id}>
                        {singlespecies.name}
                      </option>
                    ))}
                  </select>
                  <Button
                    size="lg"
                    type="submit"
                    className="loginButton"
                    onClick={handleSubmit}
                  >
                    Create Pet
                  </Button>
                </Form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerPortalView;
