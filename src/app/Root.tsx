import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const hideFooter = pathname === '/signin' || pathname === '/signup';

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#0a0b0f', color: '#ffffff', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
