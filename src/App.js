import React from "react";
// Components
import Header from "./components/Layout/Header";
// import Cart from "./components/Cart/Cart";
import Main from "./components/Layout/Main";
// Styles
import { GlobalStyle } from "./GlobalStyle";
// Context
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      {/* {cartIsShown && <Cart onClose={hideCartHandler} />} */}
      <Header />
      <main>
        <Main />
      </main>
      <GlobalStyle />
    </CartProvider>
  );
}

export default App;
