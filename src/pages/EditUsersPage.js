import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../features/Users';
import { Container, Button, Form } from 'react-bootstrap';

function EditUsersPage() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userList = useSelector((state) => state.users.value.filter((user) => user.id == id));
  useEffect(() => {
    setData(userList);
  }, []);

  const onSubmit = (user) => {
    console.log(watch());
    dispatch(
      updateUser({
        id: user.id,
        nama: user.nama,
        umur: user.umur,
        hobi: user.hobi,
        alamat: user.alamat,
      })
    );
    if (data != null) {
      navigate('/');
    }
  };

  return (
    <div>
      <Container>
        {data.map((data) => (
          <Form onSubmit={handleSubmit(onSubmit)} style={{ width: '300px', margin: '0 auto' }}>
            <h2>Update User</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="number" {...setValue('id', `${data.id}`)} {...register('id')} hidden />
              <Form.Control key={data.id} type="text" {...setValue('nama', `${data.nama}`)} {...register('nama', { required: 'Nama tidak boleh kosong', maxLength: 20 })} />
              <p>{errors.nama?.message}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Umur</Form.Label>
              <Form.Control type="number" {...setValue('umur', `${data.umur}`)} {...register('umur', { required: true, min: { value: 18, message: 'Umur minimal 18 tahun' }, max: 99 })} />
              <p>{errors.umur?.message}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Hobi</Form.Label>
              <Form.Control type="text" {...setValue('hobi', `${data.hobi}`)} {...register('hobi', { required: 'Hobi tidak boleh kosong', maxLength: 20 })} />
              <p>{errors.hobi?.message}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Alamat</Form.Label>
              <Form.Control type="text" {...setValue('alamat', `${data.alamat}`)} {...register('alamat', { required: 'Alamat tidak boleh kosong', maxLength: 50 })} />
              <p>{errors.alamat?.message}</p>
            </Form.Group>
            <Button variant="primary" type="submit">
              Simpan
            </Button>
          </Form>
        ))}
      </Container>
    </div>
  );
}

export default EditUsersPage;
