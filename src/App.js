// Components
import Header from "./components/Layout/Header";
// Styles
import { GlobalStyle } from "./GlobalStyle";
// Context
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      
      <Header />
      <main>

      </main>
      <GlobalStyle />
    </CartProvider>
  )
}

export default App;
