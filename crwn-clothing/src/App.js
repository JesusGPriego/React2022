import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import NavigationBar from './routes/navigation/Navigation';
import SignIn from './routes/authentication/Authentication';

const Shop = () => {
  return <div>I am the shop</div>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="auth" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
