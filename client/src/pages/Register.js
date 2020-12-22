// import React from "react";
// import Navibar from "../components/Navibar";
// import Footer from "../components/Footer";

// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";


// export default function BandRegister() {
//     return (
//         <div>

//             <Container>
//                 <Row className="justify-content-lg-center">
//                     <Col style={{maxWidth:"500px", marginTop:"30px", marginBottom:"30px"}}>
//                         <Form className="bandregister">

//                             <h1>Register</h1>
                            
//                             <Form.Group controlId="formFirstName">
//                                 <Form.Label>First Name</Form.Label>
//                                 <Form.Control type="username" placeholder="Enter First Name" />
//                             </Form.Group>

//                             <Form.Group controlId="formLastName">
//                                 <Form.Label>Last Name</Form.Label>
//                                 <Form.Control type="username" placeholder="Enter Last Name" />
//                             </Form.Group>

//                             <Form.Group controlId="formUsername">
//                                 <Form.Label>Username</Form.Label>
//                                 <Form.Control type="username" placeholder="Enter username" />
//                             </Form.Group>

//                             <Form.Group controlId="formBasicEmail">
//                                 <Form.Label>Email address</Form.Label>
//                                 <Form.Control type="email" placeholder="Enter email" />
//                                 <Form.Text className="text-muted">
//                                     We'll never share your email with anyone else.
//                                 </Form.Text>
//                             </Form.Group>

//                             <Form.Group controlId="formBasicPassword">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control type="password" placeholder="Password" />
//                             </Form.Group>
//                             <Button variant="primary" type="submit">
//                                 Submit
//                             </Button>
//                         </Form>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// }