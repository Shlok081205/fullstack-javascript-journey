function ProductCard(props) {
  return (
    <>
      {props.p.map((product) => (
        <div key={product.id}>
          <h2>Title: {product.title}</h2>
          <img src={product.image} alt={product.title} width="150" />
          <h2>Price:{product.price}</h2>
          <h2>Rating:{product.rating+1}</h2>
        </div>
      ))}
    </>
  );
}

export default ProductCard;