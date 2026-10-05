import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import FloatingActions from './components/layout/FloatingActions';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import ScrollToTop from './components/layout/ScrollToTop';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
      <Footer />
      <FloatingActions />
    </BrowserRouter>
  );
}
