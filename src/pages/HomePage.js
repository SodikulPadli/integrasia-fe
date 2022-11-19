import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import TableComponent from '../components/TableComponent';
import { BsPersonPlusFill } from 'react-icons/bs';

function HomePage(props) {
  return (
    <div>
      <Container>
        <Link to="/create">
          <p>
            <Button variant="primary" size="sm">
              <BsPersonPlusFill className="me-2" size={20} />
              Create
            </Button>
          </p>
        </Link>
        <TableComponent />
      </Container>
    </div>
  );
}

export default HomePage;
