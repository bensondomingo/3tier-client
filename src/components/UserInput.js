import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

export default class UserInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlerChange = this.handlerChange.bind(this)
  }

  async handleSubmit(e) {
    e.preventDefault()
    try {
      const newUser = await axios.post(
        'http://localhost:4000/users',
        this.state
      )
      console.log('new user', newUser.data)
      this.props.onAddUser(newUser.data)
      this.setState({
        firstName: '',
        lastName: '',
        email: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  handlerChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">User Input</h5>
          <h6 className="card-subtitle mb-2 text-muted">Enter user details</h6>

          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                className="form-control"
                value={this.state.firstName}
                onChange={this.handlerChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                className="form-control"
                value={this.state.lastName}
                onChange={this.handlerChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handlerChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

UserInput.propTypes = {
  onAddUser: PropTypes.func.isRequired
}
