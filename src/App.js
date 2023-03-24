import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onPassingHandle = (passOnClick) => {
    setIsOpen(passOnClick);
  }

  return (
    <div className="App">
      {isOpen && <Cart onPassing={onPassingHandle}/>}
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
