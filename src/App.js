import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Import BrowserRouter
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<ProtectedRoute component={Home} />} />
      <Route
        path="/products"
        element={<ProtectedRoute component={Products} />}
      />
      <Route path="/cart" element={<ProtectedRoute component={Cart} />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  </Router>
);

export default App;
