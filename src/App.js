import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import './App.css';
import NavBar2 from './components/NavBar2';
import ContactUsView from './views/ContactUsView';
import CustomerPortalView from './views/CustomerPortalView';

//View Component Imports
import LandingView from './views/LandingView';
import LoginView from './views/LoginView';
import ProviderHelpView from './views/ProviderHelpView';
import ProviderPortalView from './views/ProviderPortalView';
import SchedulePet from './views/SchedulePet';
import SignUpView from './views/SignUpView';

function App() {
  return (
    <BrowserRouter>
    <NavBar2/>
      {/* <NavBar/> */}
      <Switch>
        <Route exact path="/" component = {LandingView}/>
        <Route exact path="/login" component = {LoginView}/>
        {/* <Route exact path= "/contactus" component = {ContactUsView}/> */}
        <Route exact path= "/signup" component = {SignUpView}/>
        <Route exact path= "/customerportal" component = {CustomerPortalView}/>
        <Route exact path= "/customerportal/:id" component = {CustomerPortalView}/>
        <Route exact path= "/providerportal" component = {ProviderPortalView}/>
        <Route exact path= "/providerhelp" component = {ProviderHelpView}/>
        <Route exact path= "/schedulepet" component = {SchedulePet}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
