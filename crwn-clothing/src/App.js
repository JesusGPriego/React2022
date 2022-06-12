import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/Checkout';
import NavigationBar from './routes/navigation/Navigation';
import SignIn from './routes/authentication/Authentication';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="auth" element={<SignIn />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
