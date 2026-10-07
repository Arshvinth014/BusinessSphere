import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { InvestmentPlansPage } from './pages/InvestmentPlansPage';
import { BlogsAndArticlesPage } from './pages/BlogsAndArticlesPage';
import { NewsPage } from './pages/NewsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InvestmentPlansPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/investment-plans" element={<InvestmentPlansPage />} />
        <Route path="/blogs-and-articles" element={<BlogsAndArticlesPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
