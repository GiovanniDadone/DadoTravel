import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Contacts from "./pages/Contacts";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
