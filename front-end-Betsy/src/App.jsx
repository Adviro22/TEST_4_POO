import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import GetStudents from "./pages/GetStudents";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register.jsx";
import FormStudents from "./pages/FormStudents.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter>
          <main className="container content-container mx-auto px-10 md:px-0">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/students" element={<GetStudents />} />
              <Route path="/add-student" element={<FormStudents />} />
              <Route path="/student/:id" element={<FormStudents />} />
              {/* Other routes */}
            </Routes>
          </main>
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;

