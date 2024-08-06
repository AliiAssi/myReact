import React from 'react';
import useCustomFetch from '../../hooks/useCustomFetch';
import ProductItem from '../ProductItem/ProductItem';
import {useSelector} from 'react-redux';


function ProductList() {
  const searchTerm = useSelector((state) => state.searchTerm.value);
  let url;
  if(searchTerm && searchTerm !== ""){
    url = 'https://dummyjson.com/products/search?q=' + searchTerm;
  }
  else {
    url = 'https://dummyjson.com/products';
  }
  const { data, error, isLoading } = useCustomFetch(url, {});
  
  if (error) return <div>Error: {error}</div>;
  if (isLoading) return <div>Loading...</div>;

  const products = data?.products || []; // Handle the case when data.products is undefined

  return (
    <div className="container mx-auto p-4 mt-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
