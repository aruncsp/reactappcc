import logo from "./logo.svg";
import "./App.css";
import RegisterRegEx from "./Component/Registration/RegisterRegEx";
//import Register from "./Component/Registration/Register";

// import Login from "./Component/Login/Login";
//import MainComponent from "./Component/MainComponent";
//import MyComponent from "./Component/MyComponent";
//import PostListAxios from "./Component/PostListAxios";
//import AlbumList from "./Component/AlbumListClass";
// import PostListFunc from "./Component/PostListFunc";
//import AlbumList from "./Component/AlbumList";
//import PostList from "./Component/PostList";
//import BookList from "./Component/BookList";
//import CounterClass from "./Component/CounterClass";
// import Greet from "./Component/greet";
// import GreetClass from "./Component/greetClass";
// import Counter from "./Component/counter";
// import Employee from "./Component/Employee";
// import ConditionalRendering from "./Component/Login";
// import NumberState from "./Component/NumberState";
// import OrderStatus from "./Component/OrderStatus";

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
      {/* <OrderStatus /> */}
      {/* <BookList /> */}
      {/* <CounterClass /> */}
      {/* <AlbumList /> */}
      {/* <PostList /> */}
      {/* <PostListFunc /> */}
      {/* <AlbumList /> */}
      {/* <PostListAxios /> */}
      {/* <MyComponent /> */}
      {/* <MainComponent /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <RegisterRegEx />
    </div>
  );
}

export default App;
