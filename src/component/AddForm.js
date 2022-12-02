import React, { useState } from "react";
import { Container, Form } from "semantic-ui-react";
import { postData } from "../services";
import { Navigate, useNavigate } from "react-router-dom";

const AddForm = () => {
  const [formstate, setFormstate] = useState({});

  const handleChange = (e, { name, value }) =>
    setFormstate((prevState) => ({ ...prevState, [name]: value }));

  const handleSubmit = async () => {
    console.log(formstate);
    let data = await postData(formstate);
    console.log(data);
    setFormstate({ id: "", email: "", name: "" });
  };

  const { id, name, email } = formstate;
  const navigate = useNavigate();

  function onclickHandle() {
    navigate(-1);
  }

  return (
    <Container>
      <Form.Button color="blue"  content="⬅ Back" onClick={onclickHandle} />

      <Form onSubmit={handleSubmit}>
        {/* <Form.Group> */}
        <Form.Input
          fluid
          width={2}
          label="ID"
          placeholder="Id"
          name="id"
          value={id}
          onChange={handleChange}
        />
        {/* <Form.Input
            fluid
            width={2}
            label="Registration"
            placeholder="Registration"
            name="Reg"
            value={Reg}
            onChange={handleChange}
          />
        </Form.Group> */}
        <Form.Input
          placeholder="Name"
          width={5}
          label=" Name"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <Form.Input
          label=" Email"
          width={5}
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <Form.Button color="blue" content="Submit" />
      </Form>
    </Container>
  );
};

export default AddForm;
