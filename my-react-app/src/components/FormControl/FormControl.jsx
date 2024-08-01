import React from "react";

function FormControl(props) {
  return (
    <div className="mb-4">
      <label htmlFor={props.id} className="block text-gray-700 font-bold mb-2">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
  );
}

export default FormControl;
