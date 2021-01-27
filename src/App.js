import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ServiceMain from './Components/ServiceMain/ServiceMain';
import FeaturedService from './Components/ServiceMain/FeaturedService';
import MakeAppoinment from './Components/ServiceMain/MakeAppoinment';
import Testimonial from './Components/main/Testimonial';
import Testimonials from './Components/main/Testimonials';
import Blogs from './Components/main/Blogs';
import Doctors from './Components/main/Doctors';
import Contact from './Components/main/Contact';
import Foter from './Components/Footer/Foter';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appointment from './Components/Appointment/Appointment';
import Dashboard from './Components/Admin/Dashboard';



function App() {
  return (

    <>
    <Router>
    <Switch>
      <Route exact path="/">
      <Header></Header>
     <ServiceMain></ServiceMain>
     <FeaturedService></FeaturedService>
     <MakeAppoinment></MakeAppoinment>
     <Testimonials></Testimonials>
     <Blogs></Blogs>
     <Doctors></Doctors>
     <Contact></Contact>
     <Foter></Foter>
      </Route>
      <Route path="/appointment">
        <Appointment></Appointment>
      </Route>
      <Route path="/Dashboard">
        <Dashboard></Dashboard>
      </Route>
    </Switch>
  </Router>
   
     
    
     </>
  );
}

export default App;
