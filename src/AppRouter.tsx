import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PortfolioDetailPage } from './pages/PortfolioDetailPage';

export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
      </Routes>
    </BrowserRouter>;
}