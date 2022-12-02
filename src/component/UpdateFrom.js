import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Form } from "semantic-ui-react";
import { getUser, updateUser } from "../services";
import { Navigate, useNavigate } from "react-router-dom";

const UpdateFrom = () => {
  const [updatestd, setUpdatestd] = useState({ name: "", email: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e, { name, value }) =>
    setUpdatestd((prevState) => ({ ...prevState, [name]: value }));
  const { name, email } = updatestd;

  useEffect(() => {
    async function getData() {
      const data1 = await getUser(id);
      setUpdatestd(data1);
    }
    getData();
  }, []);

  const handleUpdate = async () => {
    console.log(updatestd);
    let data = await updateUser(updatestd, id);
    console.log(data);
    setUpdatestd({ email: "", name: "" });
    navigate(`/showList`);
  };
  function onclickHandle() {
    navigate(-1);
  }

  return (
    <Container>
      <Form.Button color="blue" content="⬅ Back" onClick={onclickHandle} />

      <Form onSubmit={handleUpdate}>
        {/* <Form.Group> */}
        <Form.Input
          fluid
          width={2}
          label="ID"
          placeholder="Id"
          name="id"
          value={id}
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
        <Form.Button color="blue" content="Update" onSubmit={handleUpdate} />
      </Form>
    </Container>
  );
};

export default UpdateFrom;
