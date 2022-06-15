import React, { useState } from "react";
// Components
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Main from "./components/Layout/Main";
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
        <Main />
      </main>
      <GlobalStyle />
    </CartProvider>
  );
}

export default App;
