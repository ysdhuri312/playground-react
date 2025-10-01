/** @format */

const ProductInfo = () => {
  const product = {
    name: 'Iphone',
    price: '$1000',
    availability: true,
  };
  return (
    <div>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Availability: {product.availability ? 'In stock' : 'out of stock'}</p>
    </div>
  );
};

export default ProductInfo;
