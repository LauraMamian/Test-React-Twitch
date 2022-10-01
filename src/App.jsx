import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import NavbarProvider from './context/NavbarContext';

const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));
const Games = lazy(() => import('./pages/Games'));

export default function App() {

  return (
    <div className='App bg-gradient-to-b from-slate-900 to-cyan-700 min-h-screen text-white flex items-center flex-col w-full'>
      <Router>
        <NavbarProvider>
          <Navbar />
        </NavbarProvider>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/games' element={<Games />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}