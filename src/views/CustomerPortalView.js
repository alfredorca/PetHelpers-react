import { Link } from "react-router-dom";
import "../viewsstyle/CustomerPortalView.css";
import { useEffect, useState } from "react";
import { postPetToApi } from "../services/petService";
import { Button, Form } from "react-bootstrap";
import { getSpeciesFromApi } from "../services/speciesService";
import { useHistory } from "react-router";
import { getUserFromApi } from "../services/userService";
import PetCard from "../components/PetCard";

const CustomerPortalView = () => {
  const [pet, setPet] = useState({
    name: "",
    species: "",
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

  const getPets = () => {
    let token = localStorage.getItem("jwtpethelpers");
    const tokenObject = JSON.parse(token);
    let userID = tokenObject._id;
    let user = getUserFromApi(userID) 
    setUserPets(user.pets);
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
                        <div className="col">
                          <PetCard props={userPet} />
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
