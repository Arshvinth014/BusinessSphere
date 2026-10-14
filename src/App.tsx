import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { InvestmentPlansPage } from './pages/InvestmentPlansPage';
import { MarketsPage } from './pages/MarketsPage';
import { BlogsAndArticlesPage } from './pages/BlogsAndArticlesPage';
import { NewsPage } from './pages/NewsPage';
import { GoalsPage } from './pages/GoalsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketsPage />} />
        <Route path="/markets" element={<MarketsPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/investment-plans" element={<InvestmentPlansPage />} />
        <Route path="/blogs-and-articles" element={<BlogsAndArticlesPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
