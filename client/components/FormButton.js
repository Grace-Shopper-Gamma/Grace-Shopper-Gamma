import React from 'react'

const FormButton = props => {
  const {handleSubmit, displayName} = props

  return (
    <div className="form-btn" onClick={handleSubmit}>
      <p>{displayName}</p>
    </div>
  )
}

export default FormButton
