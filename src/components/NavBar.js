import React,{useState} from "react";
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import ShowAll from './ShowAll'
import Add from './Add'
import Home from './Home'
import Reduxx from './Reduxx'
import User from './User'
import Features from './Features'
import ApolloClientComponent from './ApolloClientComponent'

function NavBar(){
    const [FeatureType,SetFeatureType] = useState(1);
    return(
        <Router>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand  as={Link} to={"/Home"}>REXX</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/Add"}>Add</Nav.Link>
                    <Nav.Link as={Link} to={"/ShowAll"}>Show All</Nav.Link>
                    <Nav.Link as={Link} to={"/Reduxx"}>Reduxx</Nav.Link>
                    <Nav.Link as={Link} to={"/ApolloClientComponent"}>Apollo Client</Nav.Link>
                    <NavDropdown title="Rex Features" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to={"/Features"} onClick={()=>SetFeatureType(1)}>Feature: 1</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/Features"} onClick={()=>SetFeatureType(2)}>Feature: 2</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/Features"} onClick={()=>SetFeatureType(3)}>Feature: 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to={"/Features"} onClick={()=>SetFeatureType(4)}>Feature: 4</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to={"/User"}>User</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                {/* <Switch> */}
                    <Route path="/Home">
                        <Home />
                    </Route>
                    <Route path="/Add">
                        <Add />
                    </Route>
                    <Route path="/Reduxx">
                        <Reduxx />
                    </Route>
                    <Route path="/ShowAll">
                        <ShowAll />
                    </Route>
                    <Route path="/ApolloClientComponent">
                        <ApolloClientComponent />
                    </Route>
                    <Route path="/User">
                        <User />
                    </Route>
                    <Route path="/Features">
                        <Features data={FeatureType}/>
                    </Route>
                {/* </Switch> */}
            </div>
        </Router>    
    )
}

export default NavBar