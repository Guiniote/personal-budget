import React from 'react'

function Filter({ name, title, options, onFilter }) {
  return (
    <div>
      <p>{title}</p>
      <select name={`${name}Filter`} id={`${name}Filter`}>
        <option value=""></option>
        {options
          ? options.map((option) => (
              <option value={option.name} key={option.id}>
                {option.name}
              </option>
            ))
          : ''}
      </select>
      <button
        onClick={
          document.querySelector(`#${name}Filter`)
            ? () =>
                onFilter(name, document.querySelector(`#${name}Filter`).value)
            : () => alert('No existen filtros')
        }
      >
        Aplicar
      </button>
    </div>
  )
}

export default Filter
