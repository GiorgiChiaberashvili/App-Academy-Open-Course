import React from 'react';
import { useState, useEffect } from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {

  // TODO: Replace with state variable
  const [sideOpen, setSideOpen] = useState(true);

  // (localStorage.getItem('sideOpen') === 'true' ? true : false) || true

  const [selectedProduct, setselectedProduct] = useState(null);

  // JSON.parse(localStorage.getItem('selectProduct')) || ''

  const handleProductClick = (product) => {
    setselectedProduct(product)
  }

  useEffect(() => {
    console.log('selectedProduct CHANGED TO', selectedProduct);
    if (selectedProduct)
      setSideOpen(true);

    // localStorage.setItem('selectProduct', JSON.stringify(selectProduct))

  }, [selectedProduct]);

  useEffect(() => {
    console.log('selectedProduct CHANGED TO', setSideOpen);
    if (!sideOpen)
      setselectedProduct('');

    // localStorage.setItem('sideOpen', sideOpen)

  }, [sideOpen]);

  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              onClick={() => handleProductClick(item)}
              isSelected={item.id === selectedProduct?.id}
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
            onClick={() => setSideOpen(!sideOpen)}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={selectedProduct} />
      </div>
    </div>
  );
}

export default ProductView;
