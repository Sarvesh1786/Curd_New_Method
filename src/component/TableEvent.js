import React from "react";
import { Table, Button } from "semantic-ui-react";
import react, { useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const TableEvent = (props) => {
  const getDelete = `http://localhost:3004/removeUser/`;
  const colors = ["blue"];
const navigate = useNavigate();


const  handleronClick =(id) =>{
  navigate(`/updateForm/${id}`)
}



  useEffect(() => {
    getDel();
  }, []);

  const getDel = async (id) => {
    axios
      .delete(`http://localhost:3004/removeUser/${id}`)
      .then((Response) => {
        console.log("Item successfully deleted.");
      })
      .then((response) => props.getData());
  };
  

  return (
    <div>
      {colors.map((color) => (
        <Table color={color} key={color}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>id</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {props.showstate.map((user) => (
              <Table.Row>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                  <Button color="blue" size="mini" onClick={() => handleronClick(user.id)} >
                    Edit
                  </Button>
                  <Button
                    color="red"
                    size="mini"
                    onClick={() => getDel(user.id)}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ))}
    </div>
  );
};
export default TableEvent;
