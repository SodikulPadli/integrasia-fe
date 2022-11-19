import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../features/Users';
import { Container, Form, Button } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function CreateUserPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const userList = useSelector((state) => state.users.value);
  const onSubmit = (data) => {
    dispatch(
      addUser({
        id: userList[userList.length - 1].id + 1,
        nama: data.nama,
        umur: data.umur,
        hobi: data.hobi,
        alamat: data.alamat,
      })
    );
    if (data != null) {
      navigate('/');
    }
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)} style={{ width: '300px', margin: '0 auto' }}>
          <h2>Create User</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nama</Form.Label>
            <Form.Control type="text" {...register('nama', { required: 'Nama tidak boleh kosong', maxLength: 20 })} />
            <p>{errors.nama?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Umur</Form.Label>
            <Form.Control type="number" {...register('umur', { required: true, min: { value: 18, message: 'Umur minimal 18 tahun' }, max: 99 })} />
            <p>{errors.umur?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Hobi</Form.Label>
            <Form.Control type="text" {...register('hobi', { required: 'Hobi tidak boleh kosong', maxLength: 20 })} />
            <p>{errors.hobi?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Alamat</Form.Label>
            <Form.Control type="text" {...register('alamat', { required: 'Alamat tidak boleh kosong', maxLength: 50 })} />
            <p>{errors.alamat?.message}</p>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add User
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default CreateUserPage;
