import React from 'react';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import {Button, Table} from 'react-bootstrap';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {data} = this.props;
    return (
      <>   
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company Name</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key = {user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.company.name}</td>
                <td>{user.address.city}</td>
                <td>
                  <Button className="mx-2">
                    <AiFillEdit />
                  </Button>
                  <Button className="mx-2">
                    <AiFillDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default List;
