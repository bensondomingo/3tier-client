import React from 'react'
import PropTypes from 'prop-types'
import TableRow from './TableRow'

export default class UserTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: []
    }
  }

  buildRows() {
    const { users } = this.props
    const rows = users.map((user, index) => (
      <TableRow
        key={index}
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
      />
    ))

    this.setState({ rows: [...this.rows, ...rows] })
  }

  render() {
    const { users } = this.props
    return (
      <table className="table table-light table-striped">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email Address</th>
            {/* <th scope="col">Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <TableRow
              key={user._id}
              id={user._id}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
            />
          ))}
        </tbody>
      </table>
    )
  }
}

UserTable.propTypes = {
  users: PropTypes.array.isRequired
}
