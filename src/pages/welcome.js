import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const welcome = () => {
  const [jari, setJari] = useState(0);
  const phi = 22 / 7;
  const luasLingkaran = (e) => {
    e.preventDefault();
    alert(`Ini hasil Luas Lingkaran = ${phi * jari * jari}`);
  };
  const volumeBola = (e) => {
    e.preventDefault();
    alert(`Ini hasil Volume Bola = ${(4 / 3) * phi * jari * jari * jari}`);
  };
  return (
    <div>
      <h1>WELCOME</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Jari-Jari</Form.Label>
        <Form.Control type="number" onChange={(e) => setJari(e.target.value)} />
      </Form.Group>

      <Button variant="primary" onClick={(e) => luasLingkaran(e)}>
        Luas Lingkaran
      </Button>

      <Button variant="primary" onClick={(e) => volumeBola(e)}>
        Volume Bola
      </Button>
    </div>
  );
};
export default welcome;
