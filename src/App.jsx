import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demo from "./pages/Demo";
import Form from "./pages/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
