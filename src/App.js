import React from 'react'
import axios from 'axios'
import UserInput from './components/UserInput'
import UserTable from './components/UserTable'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: {},
      users: []
    }
    this.userInputModal = React.createRef()
    this.handleAddUser = this.handleAddUser.bind(this)
  }

  handleAddUser(user) {
    // console.log('user: ', user)
    this.setState({
      users: [...this.state.users, user]
    })
  }

  async componentDidMount() {
    try {
      const res = await axios.get('http://localhost:4000/users')
      const { users } = res.data
      this.setState({ users: [...this.state.users, ...users] })
      console.log(this.state.users)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="container" style={{ maxWidth: '50rem' }}>
        <div className="my-3">
          <UserInput onAddUser={this.handleAddUser} />
        </div>
        <div>
          {this.state.users.length > 0 && (
            <UserTable users={this.state.users} />
          )}
        </div>
      </div>
    )
  }
}
