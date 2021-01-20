import React from 'react'

const UserCard = ({user: {name, email, isAdmin}}) => {
  return (
    <div className="user-card">
      <a>Name: {name}</a>
      <p>Email: {email}</p>
      <div className="user-radio">
        <p>Admin: {isAdmin ? 'True' : 'False'}</p>
        <label htmlFor="huey">
          <input className="user-radio-input" type="radio" value="true" />
          Huey
        </label>
      </div>
    </div>
  )
}

export default UserCard
