/*
Create React component that contains an array of fruit object with id,name,price,availability.
perform the following task using map and filter
1.display only available fruits
2.Increase their price by 10
3.Display fruit name and updated price
 */

function Mf4() {
  const fruits = [
    { id: 1, name: "Apple", price: 120, availability: true },
    { id: 2, name: "Banana", price: 40, availability: false },
    { id: 3, name: "Mango", price: 150, availability: true },
    { id: 4, name: "Orange", price: 80, availability: false },
    { id: 5, name: "Kiwi", price: 200, availability: true },
  ];

  return (
    <>
      <h1>Available Fruits</h1>
      {fruits
        .filter((fruit) => fruit.availability === true)
        .map((fruit) => (
          <div key={fruit.id}>
            <h2>Fruit Name: {fruit.name}</h2>
            <h2>Updated Price:{fruit.price + 10}</h2>
          </div>
        ))}
    </>
  );
}

export default Mf4;
