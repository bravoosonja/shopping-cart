import React, { useState } from "react";
// Components
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
// Styles
import { GlobalStyle } from "./GlobalStyle";
// Context
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header />
      <main>Main</main>
      <GlobalStyle />
    </CartProvider>
  );
}

export default App;
