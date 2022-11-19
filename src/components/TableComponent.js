import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../features/Users';
import { Container, Table, Button } from 'react-bootstrap';
import { GrUpdate } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';

export default function TableComponent() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  return (
    <div>
      <Container>
        <Table striped bordered hover size="sm" className="text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Umur</th>
              <th>Hobi</th>
              <th>Alamat</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama}</td>
                <td>{item.umur}</td>
                <td>{item.hobi}</td>
                <td>{item.alamat}</td>
                <td>
                  <Link to={`detail/${item.id}`}>
                    <Button variant="success" size="sm" className="me-3">
                      <FaInfoCircle /> Detail
                    </Button>
                  </Link>
                  <Link to={`edit/${item.id}`}>
                    <Button variant="primary" size="sm" className="me-3">
                      <GrUpdate /> Update
                    </Button>
                  </Link>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      dispatch(deleteUser({ id: item.id }));
                    }}
                  >
                    <AiFillDelete /> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
