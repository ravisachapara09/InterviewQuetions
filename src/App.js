import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuetionsBNU from './Component/QuetionsBNU';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuetionsBNU />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
