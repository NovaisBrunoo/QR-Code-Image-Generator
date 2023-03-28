import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { setItem } from '../../utils/storage';
import BasicButton from "../BasicButton";
import './style.css';


function ComponetForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    linkedin: '',
    github: ''
  })
  function handleChangeForm(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  async function handleSubmit(event) {
    event.preventDefault()
    try {
      if (!form.linkedin || !form.github || !form.name) {
        console.log("Preencha todos os campos!");
        return;
      }
      await api.post('/cadastro', {
        name: form.name,
        linkedin: form.linkedin,
        github: form.github
      });
      setItem('name', form.name)
      navigate('/Scanne');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
          <Form.Control
            style={{ maxWidth: 800, minWidth: 100, height: 50 }}
            placeholder="Name"
            name='name'
            value={form.name}
            onChange={(e) => handleChangeForm(e)}

          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Linkedin URL</InputGroup.Text>
          <Form.Control
            style={{ maxWidth: 800, minWidth: 100, height: 50 }}
            placeholder="Linkedin URL"
            name='linkedin'
            value={form.linkedin}
            onChange={(e) => handleChangeForm(e)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Github URL</InputGroup.Text>
          <Form.Control
            style={{ maxWidth: 800, minWidth: 100, height: 50 }}
            placeholder="Github URL"
            name='github'
            value={form.github}
            onChange={(e) => handleChangeForm(e)}
          />
        </InputGroup>


        <BasicButton />
      </form>
    </>
  )
}
export default ComponetForm;