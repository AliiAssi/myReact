export default function FlexboxLayout() {
  return (
    <div className="p-6">
      <div className="flex space-x-4">
        <div className="flex-1 bg-gray-200 p-4">Item 1</div>
        <div className="flex-1 bg-gray-300 p-4">Item 2</div>
        <div className="flex-1 bg-gray-400 p-4">Item 3</div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="bg-blue-500 text-white p-4">Left</div>
        <div className="bg-red-500 text-white p-4">Right</div>
      </div>
    </div>  
  );
}
