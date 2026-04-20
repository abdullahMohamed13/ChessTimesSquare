import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import '../src/css/index.css';

import Home from './pages/Home';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';

const MatchResults = lazy(() => import('./pages/MatchResults'));
const Contact = lazy(() => import('./pages/Contact'));
const NoPage = lazy(() => import('./pages/NoPage'));

function AnimatedRoutes() {
  const location = useLocation();

  return <AnimatePresence mode="wait">
        <motion.div
            key={location.pathname}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}>
            <NavBar />
            <div className="app">
                <Suspense fallback={<div className="loading">Loading</div>}>
                    <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/results" element={<MatchResults />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                    </Routes>
                </Suspense>
            </div>
            <Footer />
        </motion.div>
    </AnimatePresence>
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
