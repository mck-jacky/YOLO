import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from "./routes/LoginPage";
import SurveryPage from './routes/SurveyPage';
import ResultPage from './routes/ResultPage';
import LandingPage from './routes/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/survey" element={<SurveryPage />} />
        <Route path='/result' element={<ResultPage />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
