import { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import BackComponent from '../components/BackComponent';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DetailUserPage() {
  const [data, setData] = useState([]);
  let { id } = useParams();
  const detailUser = useSelector((state) => state.users.value.filter((user) => user.id == id));
  useEffect(() => {
    setData(detailUser);
  }, []);

  return (
    <>
      <Container>
        {data.map((item) => (
          <Card>
            <Card.Header as="h5">Detail User</Card.Header>
            <Card.Body>
              <Card.Title key={item.id}>{item.nama}</Card.Title>
              <Card.Text> Umur : {item.umur}</Card.Text>
              <Card.Text> Hobi : {item.hobi}</Card.Text>
              <Card.Text>Alamat : {item.alamat}</Card.Text>
              <BackComponent />
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default DetailUserPage;
