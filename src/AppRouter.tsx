import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PortfolioDetailPage } from './pages/PortfolioDetailPage';
import { PricingPage } from './pages/PricingPage';
import { ServicesDetailPage } from './pages/ServicesDetailPage';

export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/services/:id" element={<ServicesDetailPage />} />
      </Routes>
    </BrowserRouter>;
}