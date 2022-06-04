import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import NavigationBar from './routes/navigation/Navigation';
import SignIn from './components/signIn/SignIn';
import SignUpForm from './components/signUpForm/SignUpForm';

const Shop = () => {
  return <div>I am the shop</div>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="signin" element={<SignIn />}></Route>
        <Route path="signup" element={<SignUpForm />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
