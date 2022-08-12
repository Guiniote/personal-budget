import React from 'react'

function Filter(data) {
  return (
    <div>
      <p>{data.title}</p>
      <select name={`${data.name}Filter`}>
        <option value=""></option>
        {data.options
          ? data.options.map((option) => (
              <option value={option.id}>{option.name}</option>
            ))
          : ''}
      </select>
    </div>
  )
}

export default Filter
