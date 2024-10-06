import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import HomePage from "./pages/HomePage";
import Browse from "./pages/Browse";
import LogInPage from "./pages/LogInPage";
import SigUpPage from "./pages/SigUpPage";
import PrivateRoute from "./components/PraviteRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/browse"
            element={
              <PrivateRoute>
                <Browse />
              </PrivateRoute>
            }
          />
          <Route path="/signup" element={<SigUpPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/login" element={<LogInPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
