import React from 'react'
import PropTypes from 'prop-types'

export default class TableRow extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteUser = this.handleDeleteUser.bind(this)
  }

  handleDeleteUser() {}

  render() {
    const { firstName, lastName, email } = this.props
    return (
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        {/* <td>
          <button type="button" className="btn btn-info mx-1">
            Edit
          </button>
          <button type="button" className="btn btn-danger mx-1">
            Delete
          </button>
        </td> */}
      </tr>
    )
  }
}

TableRow.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}
