
import './App.css';

import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/event/:id" element={<EventPage/>} />
     </Routes>
    </div>
  );
}

export default App;
