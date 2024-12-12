import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import HomePage from './pages/HomePage';
    import MyPage from './pages/MyPage';
    import Navbar from './components/Navbar';
    import './index.css';

    const App = () => (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    );

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
