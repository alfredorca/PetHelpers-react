import { Link } from "react-router-dom";
import { isAuthenticated } from "../services/authService";
import "../viewsstyle/infoView.css";
const infoView = () => {
  let { user } = isAuthenticated();
  console.log(user);
  return (
    <section className="CustomerInfoPortalViewMain">
      <div className="customerInfoContainer">
        <div className="customerInfoSection">
          <div className="customerInfoList">
            <ul >
              <li>No notifications! 😁</li>
              <li>
                <Link className="customerInfoLink" to="/info">
                  Your info
                </Link>
              </li>
              <li>
                <Link className="customerInfoLink" to="/providerportal">
                  Possible customers
                </Link>
                </li>
            </ul>
          </div>
          <div className="contentContainer">
            <h2>Good to see you!</h2>

            <div className="infoContainer">
              <div className="labelContainer">
                <p>Name: </p>
                <p>Email: </p>
                <p>Role: </p>
              </div>
              <div className = 'dataContainer'>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default infoView;
