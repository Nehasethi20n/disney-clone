import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from "./components/SignIn";
import Homepage from "./components/Homepage";
import HandleMagicLink from "./components/HandleMagicLink";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/magic-link" element={<HandleMagicLink />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;

