import React from 'react'
import { FaFilter } from 'react-icons/fa'

function Filter({ name, title, options, onFilter }) {
  return (
    <div className="flex flex-row">
      <div className="flex-auto md:shrink"></div>
      {/* Print filter title */}
      <p className="flex-none my-auto text-xs ml-4 md:ml-9">{title}:</p>
      {/* Display filter options */}
      <select
        name={`${name}Filter`}
        id={`${name}Filter`}
        className="flex-none bg-gray-200 text-gray-700 my-auto text-xs h-1/2 mx-3 focus:outline-none focus:shadow border border-gray-300 rounded"
      >
        <option value=""></option>
        {options &&
          options.map((option) => (
            <option value={option.name} key={option.id}>
              {option.name}
            </option>
          ))}
      </select>
      {/* Apply filter button */}
      <button
        className="flex-none ml-2 text-xs "
        onClick={
          document.querySelector(`#${name}Filter`)
            ? () =>
                onFilter(name, document.querySelector(`#${name}Filter`).value)
            : () => alert('No existen filtros')
        }
      >
        <FaFilter className="text-indigo-500 text-base" title={'Aplicar'} />
      </button>
      <div className="flex-auto w-1/6 md:w-1/3 lg:w-1/2 xl:w-5/12 2xl:w-4/12"></div>
    </div>
  )
}

export default Filter
