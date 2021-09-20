import { Link } from "react-router-dom";
import "../viewsstyle/CustomerPortalView.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { getUserFromApi, getUserPetsFromApi } from "../services/userService";
import { Card } from 'react-bootstrap'
import { isAuthenticated, logOut } from "../services/authService";
import { getAllPetsFromApi } from "../services/petService";
import ProviderPetCard from "../components/ProviderPetCard";

const ProviderPortalView = () => {
  const [pet, setPet] = useState({
    name: "",
    type: "",
  });
  const [species, setSpecies] = useState([]);
  const [providerPets, setProviderPets] = useState([]);
  
  const history = useHistory();
  
  
    useEffect(() => {
      getPets();
    }, []);

  const getPets =  async () => {
    try {
      let {data} = await getAllPetsFromApi();
      setProviderPets(data.map(pet => pet))      
      // let token =  localStorage.getItem("jwtpethelpers");
      // const tokenObject =  JSON.parse(token);
      // let userID =  tokenObject._id;
      // let user =  getUserPetsFromApi(userID)
      // setUserPets(user.pets);
    } catch (error) {
      console.log("not working dude");
    }
  };


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   postPetToApi(pet);
  //   history.push("/customerportal");
  // };

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
              <li>
                <Link className="customerLink" to="/info">
                  Your info
                </Link>
              </li>
                <li>
                <Link className="customerLink" to="/providerportal">
                  Possible customers
                </Link>
                </li>
            </ul>
          </div>
          <div className="contentContainer">
            <h2>Good to see you!</h2>
            <>
                <div className="container mt-5">
                  <div className="row">
                    {providerPets &&
                      providerPets.map((userPet) => (
                        <div key={userPet._id} className="col">
                          <ProviderPetCard props={userPet} />
                        </div>
                      ))}
                  </div>
                </div>
              </>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderPortalView;