import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../";
import { LoginPage, ProfilePage, RegisterPage } from "../../pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route element={<ProtectedRoute type="auth" />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route element={<ProtectedRoute type="public" />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
