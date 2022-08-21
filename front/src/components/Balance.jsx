import React from 'react'

function Balance({ balance }) {
  return (
    <p className="text-bold">
      Balance actual:
      {Math.sign(balance) === 1 ? (
        <span className="text-green-600 text-4xl"> ${balance}</span>
      ) : (
        <span className="text-red-600 text-4xl"> ${balance}</span>
      )}
    </p>
  )
}

export default Balance
