import React from 'react';

function Card({ title, imageSrc, content, buttonText }) {
  const alertMessage = (userName) =>{
    alert(`${userName}  you clicked on ${title} card!`);
  };
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto">
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{content}</p>
        <button 
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          onClick={() => alertMessage("ali")}
        >
         {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Card;
