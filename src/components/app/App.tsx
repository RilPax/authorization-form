import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute type="auth" />}>
        <Route path="/profile" element={} />
      </Route>
      <Route element={<ProtectedRoute type="public" />}>
        <Route path="/login" element={} />
        <Route path="register" element={} />
      </Route>
    </Routes>
  );
}

export default App;
