import React from "react";

function QA(props) {
  const { question, answer, id, ids, setIds, enable } = props;

  const isSelected = ids.includes(id);

  const handleToggle = () => {
    if (isSelected) {
      setIds(ids.filter((item) => item !== id));
    } else {
      if (enable) {
        setIds([...ids, id]);
      } else {
        setIds([id]);
      }
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{question}</h3>
        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded-md text-white ${
            isSelected ? "bg-red-500" : "bg-blue-500"
          } hover:bg-opacity-80`}
        >
          {isSelected ? "Hide Answer" : "Show Answer"}
        </button>
      </div>
      {isSelected && <p className="text-gray-700">{answer}</p>}
    </div>
  );
}

export default QA;
