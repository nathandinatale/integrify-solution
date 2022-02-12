import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import UserdetailsPage from "./pages/UserdetailsPage";

function App() {
  return (
    <div>
      <Routes>
        {/* this is the default loaded page */}
        <Route path="/" element={<Homepage />} />
        {/*When clicking on a user's details page, will update the URL with their ID*/}
        <Route path="/details/:id" element={<UserdetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
