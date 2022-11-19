import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';

function BackComponent() {
  return (
    <div>
      <Container>
        <Link to="/">
          <Button variant="dark" size="sm">
            <BsArrowLeft /> Back
          </Button>
        </Link>
      </Container>
    </div>
  );
}

export default BackComponent;
