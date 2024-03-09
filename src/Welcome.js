import { useState } from 'react';
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Welcome() {
  const [show, setShow] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
      <Alert show={show} variant="success">
        <Alert.Heading>Welcome</Alert.Heading>
        <h1 className='text-center'>
          My first React app!
        </h1>
        <hr />
        <div className="d justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)} className='btn-lg'>Welcome</Button>}
    </div>
  );
}

export default Welcome;