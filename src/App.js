import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'; 
import User from "./component/User"
import Home from "./component/Home"
import Error from "./component/Error"
import Company from './component/Company';
import Contact from './component/Contact';
import {Navbar, Nav, Container} from "react-bootstrap"



function App() {
  return (
  <Router>
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Logictrix Infotech</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link > <Link to="/" >Home</Link></Nav.Link>
        <Nav.Link ><Link to="/User" >Users</Link></Nav.Link>
        <Nav.Link > <Link to="/company" >Company</Link></Nav.Link>
        <Nav.Link ><Link to="/contact" >Contact</Link></Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Container>
  <Switch>
<Route exact path="/user" component={User} />  
       <Route exact path="/" component={Home} />  
     <Route exact path="/company" component={Company} />  
       <Route exact path="/contact" component={Contact} />
       <Route  component={Error} />
       </Switch>
</Container>
</Router>  
  );
}

export default App;
