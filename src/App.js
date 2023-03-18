import './App.css';
import 'rsuite/dist/rsuite.min.css'
import { Form, ButtonToolbar, Button, Input } from 'rsuite';

function App() {
  return (
    <div className="App">
      {/* <div> */}
      <Form>
        <Form.Group controlId="name">
          <Form.ControlLabel>Username</Form.ControlLabel>
          <Form.Control name="name" />
          <Form.HelpText>Username is required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control name="email" type="email" />
          <Form.HelpText tooltip>Email is required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control name="password" type="password" autoComplete="off" />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary">Login</Button>
            <Button appearance="default">Sign up</Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
      {/* </div> */}
    </div>
  );
}

export default App;
