import logo from "./logo.svg";
import "./App.css";
// import Greet from "./Component/greet";
// import GreetClass from "./Component/greetClass";
// import Counter from "./Component/counter";
// import Employee from "./Component/Employee";
// import ConditionalRendering from "./Component/Login";
import NumberState from "./Component/NumberState";
import OrderStatus from "./Component/OrderStatus";

function App() {
  const employee = {
    name: "John",
    age: 30,
    dept: "IT",
    address: {
      street: "10, Downing St.",
      city: "London",
    },
  };
  return (
    <div className="App">
      {/* <Greet firstName="Arun" lastName="Kumar" data={employee} />
      <Greet firstName="James" lastName="Bond" data={employee} />

      <GreetClass firstName="JamesClass" lastName="BondClass" data={employee} /> */}
      {/* <Counter /> */}
      {/* <Employee /> */}
      {/* <ConditionalRendering /> */}

      {/* <NumberState /> */}
      <OrderStatus />
    </div>
  );
}

export default App;
