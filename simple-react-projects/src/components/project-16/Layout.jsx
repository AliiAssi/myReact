import React from 'react';
import useFetchHook from './hooks/useFetchHook';

function Layout() {
  const { data, loading, error } = useFetchHook('https://dummyjson.com/products',{});
  if (loading) {
    return <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">Error: {error.message}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
        <div className="p-6 flex flex-col items-center">
          {data && data.products && data.products.length > 0 && data.products.map(
            (product) =>{
                return (
                  <div key={product.id} className="mb-4 p-16">
                    <h2>{product.title}</h2>
                    <hr />
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                  </div>
                );

            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Layout;
