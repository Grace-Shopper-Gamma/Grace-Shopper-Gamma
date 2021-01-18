import React from 'react'

const PaymentForm = () => {
  return (
    <div>
      <input
        className="form-input input"
        name="cardInformation"
        type="text"
        placeholder="Card number"
      />
      <input
        className="form-input input"
        name="cardName"
        type="text"
        placeholder="Name on card"
      />
      <div className="small-input">
        <input
          className="form-input small"
          name="expiration"
          type="text"
          placeholder="Expiration date (MM/YY)"
        />
        <input
          className="form-input small"
          name="securityCode"
          type="text"
          placeholder="Security code"
        />
      </div>
    </div>
  )
}

export default PaymentForm
