import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BlogsAndArticlesPage } from './pages/BlogsAndArticlesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs-and-articles" element={<BlogsAndArticlesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
