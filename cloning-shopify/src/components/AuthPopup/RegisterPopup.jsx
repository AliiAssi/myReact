import React from 'react';
import { FaTimes, FaSpinner, FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';
import InputControl from '../FormControl/InputControl';
import { inputsToHandle } from '../../utils/register-inputs';
import ButtonControl from '../FormControl/ButtonControl';

function RegisterPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);


  const updatedInputs = {
    ...inputsToHandle,
    firstName: {
      ...inputsToHandle.firstName,
      value: firstName,
      setValue: setFirstName,
    },
    lastName: {
      ...inputsToHandle.lastName,
      value: lastName,
      setValue: setLastName,
    },
    email: {
      ...inputsToHandle.email,
      value: email,
      setValue: setEmail,
    },
    password: {
      ...inputsToHandle.password,
      value: password,
      setValue: setPassword,
    },
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    const apiUrl = import.meta.env.VITE_API_URL;

    try {
      const response = await fetch(`${apiUrl}/users/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const result = await response.json();
      setSuccess('Registration successful!');
      setTimeout(() => {
        onClose();
      }, 1500); // Navigate after 1.5 seconds
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-80">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmission}>
          {Object.keys(updatedInputs).map((key) => {
            const inputProps = updatedInputs[key];
            return (
              <InputControl
                key={inputProps.id}
                id={inputProps.id}
                label={inputProps.label}
                type={inputProps.type}
                placeholder={inputProps.placeholder}
                value={inputProps.value}
                setValue={inputProps.setValue}
                required={inputProps.required}
              />
            );
          })}
          {error && (
            <div className="flex items-center text-red-600 mb-4">
              <FaExclamationCircle size={20} className="mr-2" />
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="flex items-center text-green-600 mb-4">
              <FaCheckCircle size={20} className="mr-2" />
              <span>{success}</span>
            </div>
          )}
          {isLoading && (
            <div className="flex items-center text-gray-600 mb-4">
              <FaSpinner size={20} className="mr-2 animate-spin" />
              <span>Submitting...</span>
            </div>
          )}
          <ButtonControl
            value="Register"
            type="submit"
            className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
        </form>
      </div>
    </div>
  );
}

export default RegisterPopup;
