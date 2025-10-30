import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ServicesDetailPage } from './pages/ServicesDetailPage';
import { PortfolioDetailPage } from './pages/PortfolioDetailPage';
import { PricingPage } from './pages/PricingPage';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:serviceId" element={<ServicesDetailPage />} />
        <Route path="/portfolio/:projectId" element={<PortfolioDetailPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>;
}