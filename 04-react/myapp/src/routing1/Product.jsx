const product = (props) => {
  return (
    <div>
      {props.info.map((p) => {
        return (
          <div>
            <img src={p.pic} width={200} height={300} />
            <h1>{p.name}</h1>
            <h1>Rs.{p.price}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default product;
