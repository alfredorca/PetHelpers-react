import { Link } from "react-router-dom";
import "../viewsstyle/CustomerPortalView.css";
import { useEffect, useState } from "react";
import { getPetsFromApi, postPetToApi } from "../services/petService";
import { Button, Form } from "react-bootstrap";
import { getSpeciesFromApi } from "../services/speciesService";
import { useHistory } from "react-router";
import { getUserFromApi } from "../services/userService";
import PetCard from "../components/PetCard";
import { isAuthenticated, logOut } from "../services/authService";

const CustomerPortalView = () => {
  let {
    user: { _id },
  } = isAuthenticated();
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
    // console.log(_id);
  }, []);

  const getPets = async () => {
    try {
      let {
        data: { pets },
      } = await getUserFromApi(_id);
      // console.log(pets[1].type.name);
      return setUserPets(pets)
    } catch (error) {
      console.log("hello world");
      console.log("not working dude");
    }
  };

  console.log(userPets);

  function handleChange(event) {
    setPet({
      ...pet,
      [event.target.name]: event.target.value,
    });
  }

  const getSpecies = async () => {
    const response = await getSpeciesFromApi();
    setSpecies(response.data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postPetToApi(pet);
    window.location.reload();
  };

  const handleLogOut = async () => {
    await logOut();
    history.push("/login");
  };

  return (
    <section className="CustomerPortalViewMain">
      <div className="customerContainer">
        <div className="customerSection">
          <div className="customerList">
            <ul>
              <li>
                <Link className="customerLink" to="/customerportal">
                  Pets
                </Link>
              </li>
              <li>
                <Link className="customerLink" to="/customerinfo">
                  Your info
                </Link>
              </li>

              <li>
                <Button
                  className="customerButton"
                  onClick={() => {
                    setShowForm(true);
                    setNoPetView(false);
                    getSpecies();
                    setUserPets("");
                  }}
                >
                  Create Pet
                </Button>
              </li>
            </ul>
          </div>
          <div className="contentContainer">
            <h2>Good to see you!</h2>

            {userPets.length === 0 ? (
              noPetView && (
                <div className="NoPetYet">
                  <h4>It looks like you don't have pets yet!</h4>
                  <p>Would you like to add one?</p>
                  <Button
                    onClick={() => {
                      setShowForm(true);
                      setNoPetView(false);
                      getSpecies();
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
                    {userPets && userPets.map((pet) => (
                    <div className='col' key={pet._id}>
                      <PetCard props={pet} />
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
