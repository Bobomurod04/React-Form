import React from 'react'
import FormComponent from './components/FormComponent';
import List from './components/List'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      user: {
        username: '',
        name: '',
        email: '',
        phone: '',
        company: {
          name: '',
        },
        address: {
          city: '',
        }
      },
    }
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    this.setState({ users });
  }

  inputHandler = (e) => {
    const {name, value} = e.target
  }
  submitHandler = (e) => {
    const {name, value} = e.target
  }

  render() {
    const { users } = this.state;
    return (
      <div className="app">
        <FormComponent handler = { this.inputHandler } />
        <List data = {users} />
      </div>
    )
  }
}

export default App;
