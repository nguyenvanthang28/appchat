import { PrivateRoute } from "./Routes/PrivateRoute";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Chatroom from "./pages/Chatroom";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chatroom />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
