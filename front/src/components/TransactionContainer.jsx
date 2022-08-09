import React, { useEffect } from 'react'

function TransactionContainer() {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_DOMAIN}/transaction`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
  }, [])

  return (
    <div>
      <p>hola</p>
    </div>
  )
}

export default TransactionContainer
