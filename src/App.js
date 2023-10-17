import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'
import AboutPage from './AboutPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;