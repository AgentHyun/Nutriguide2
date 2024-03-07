import React from 'react'
import '../css/ProductPage.css'

const ProductPage = () => {
  // 간단한 제품 데이터
  const products = [
    {
      id: 1,
      name: '멀티비타민',
      price: '$10',
      imageUrl: 'supple1.jpg', // 이미지 경로는 실제 이미지가 위치한 경로로 수정해야 합니다.
    },
    {
      id: 2,
      name: '오메가-3',
      price: '$15',
      imageUrl: 'supple2.jpg', // 이미지 경로는 실제 이미지가 위치한 경로로 수정해야 합니다.
    },
    {
      id: 3,
      name: '칼슘+비타민 D',
      price: '$12',
      imageUrl: 'supple3.jpg', // 이미지 경로는 실제 이미지가 위치한 경로로 수정해야 합니다.
    },
  ];

  return (
    <div className="product-page">
      
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.imageUrl} alt={product.name}style={{ width: '100px', height: '100px' }} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;

