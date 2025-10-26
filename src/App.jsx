import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Admin/Dashboard";

import Users from "./pages/Admin/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>  
              <About />
            </MainLayout>
          }
        />

        {/* Admin routes */}
      <Route element={<AdminLayout />}>
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="users" element={<Users />} />
</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
