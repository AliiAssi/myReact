import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

function ProductList() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true); // To track if there are more products to load

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=3&skip=${skip}`);
      const data = await response.json();
      const newProducts = data.products;

      if (newProducts.length === 0) {
        setHasMore(false); // No more products to load
      } else {
        setProducts(prevProducts => {
          // Create a set of existing product IDs to check for duplicates
          const existingIds = new Set(prevProducts.map(product => product.id));
          // Filter out any new products that already exist
          const filteredProducts = newProducts.filter(product => !existingIds.has(product.id));
          return [...prevProducts, ...filteredProducts];
        });
      }
    } catch (e) {
      setIsError(true);
      console.error('Error fetching products:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [skip]);

  const loadMore = () => {
    if(skip >= 100) {setHasMore(false);return} // No more products to load}
    setSkip(prevSkip => prevSkip + 3); // Increment skip to fetch the next set of products
  };

  if (isError) return <div className="text-red-600 text-center p-4">Error occurred. Please try again later.</div>;
  if (isLoading && products.length === 0) return <div className="text-center p-4">Loading...</div>;

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductItem
            key={product.id}
            title={product.title}
            image={product.images[0]}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
      {hasMore && (
        <div className="text-center mt-4">
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 disabled:bg-blue-400"
          >
            {isLoading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductList;
