import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPoke }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: "",
    },
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const pokeData = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.front,
        back: formData.back,
      },
    };

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokeData),
    })
      .then((r) => r.json())
      .then((newPokemon) => onAddPoke(newPokemon));
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            onChange={handleChange}
            value={formData.name}
            fluid
            label="Name"
            placeholder="Name"
            name="name"
          />
          <Form.Input
            onChange={handleChange}
            value={formData.hp}
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
          />
          <Form.Input
            onChange={handleChange}
            value={formData.front}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={handleChange}
            value={formData.back}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
