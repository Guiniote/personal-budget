import React from 'react'
import { useField } from 'formik'

// Select field component, with label, input and error handler
function FormSelectField({ label, ...props }) {
  const [field, meta] = useField(props)
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold pt-2 pb-1"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <select
        {...field}
        {...props}
        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow border border-gray-300 rounded py-2 px-4 block w-full"
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  )
}

export default FormSelectField
