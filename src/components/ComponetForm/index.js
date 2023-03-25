import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './style.css';

function ComponetForm() {
  return (
    <>
      <form>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
          <Form.Control
            style={{ width: 500 }}
            placeholder="Username"

          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Linkedin URL</InputGroup.Text>
          <Form.Control
            placeholder="Linkedin URL"

          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Github URL</InputGroup.Text>
          <Form.Control
            placeholder="Github URL"

          />
        </InputGroup>
      </form>
    </>
  )
}
export default ComponetForm;