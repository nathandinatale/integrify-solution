import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import UserdetailsPage from "./pages/UserdetailsPage";

function App() {
  return (
    <div>
      <Routes>
        {/* this is the default loaded page */}
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<UserdetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
