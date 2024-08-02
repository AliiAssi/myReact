import React, { useState } from 'react';
import data from '../../data/data';
import QA from './QA';

function Layout() {
  const [enable, setEnable] = useState(false);
  const [ids, setIds] = useState([]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
        <div className="p-6">
          <button
            className={`px-4 py-2 rounded-md text-white hover:bg-opacity-80 bg-red-500 m-4`}
            onClick={() => setEnable(!enable)}
          >
            enable multiple selection
          </button>
          {data.map((item) => (
            <QA 
              key={item.id}
              question={item.question}
              answer={item.answer}
              id={item.id}
              ids={ids}
              setIds={setIds}
              enable={enable}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Layout;
