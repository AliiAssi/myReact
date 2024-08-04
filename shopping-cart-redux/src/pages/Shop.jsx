import React, { useEffect } from 'react';
import useFetchApi from '../hooks/useFetchApi';
import Loader from '../components/loader/Loader';
import ProductTile from '../components/product-tile/ProductTile';
import SearchBar from '../components/search-bar/SearchBar';
import {useDispatch, useSelector} from 'react-redux';

function Shop() {

  const searchTerm = useSelector((state) => state.searchTerm.value);
  

  const {data, error , isLoading} = useFetchApi(`https://fakestoreapi.com/products?limit=${searchTerm}`,{});
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Search and Filters Section */}
      <section className="bg-white shadow-md py-4">
        <SearchBar />
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Products</h2>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map(product => (
              <ProductTile key={product.id} product={product} />
            ))}
          </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Shop;
