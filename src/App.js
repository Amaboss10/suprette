import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./comopnents/admin/Dashboard";
import Home from "./comopnents/clients/Home";
import Header from "./comopnents/Header";
import Login from "./comopnents/Login";
import store from "./comopnents/redux/store";
import EditProduct from './comopnents/admin/EditProduct';
import AddProduct from "./comopnents/admin/AddProduct";
import ProtectedRoute from "./comopnents/Routes/ProtectedRoute";

function App() {
  return (
      <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-suprette" element={<Login />} />
          <Route
            path="/dashboard-suprette"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>}>
          </Route>
          <Route path="/product/edit/:id"
            element={
              <ProtectedRoute>
                <EditProduct />
              </ProtectedRoute>
            }>
          </Route>
          <Route path="/product/add"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }>
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
