import React, { useState } from "react";
// Components
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
// Styles
import { GlobalStyle } from "./GlobalStyle";
import "normalize.css";

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
      <Header onShowCart={showCartHandler} />
      <main>
        <Products />
      </main>
      <GlobalStyle />
    </CartProvider>
  );
}

export default App;
