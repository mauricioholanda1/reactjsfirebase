import React from "react";
import {Button} from "reactstrap";

const Landing = () => (
  <div>
    <h1>Landing Page</h1>
    <p>The Landing Page is accessible by every user.</p>
    <div>
      <Button color="primary">primary</Button>{" "}
      <Button color="secondary">secondary</Button>{" "}
      <Button color="success">success</Button>{" "}
      <Button color="info">info</Button>{" "}
      <Button color="warning">warning</Button>{" "}
      <Button color="danger">danger</Button> <Button color="link">link</Button>
    </div>
    
  </div>
);
export default Landing;
