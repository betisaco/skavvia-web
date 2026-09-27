import React from 'react';
import { useRouter } from './router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SupportPage } from './pages/SupportPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { DeleteAccountPage } from './pages/DeleteAccountPage';
import { DownloadPage } from './pages/DownloadPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const { currentPath } = useRouter();

  // Normalize path by removing trailing slash if not root
  const normalizedPath = currentPath.length > 1 && currentPath.endsWith('/')
    ? currentPath.slice(0, -1)
    : currentPath;

  const renderPage = () => {
    switch (normalizedPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/support':
        return <SupportPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/terms':
        return <TermsPage />;
      case '/delete-account':
        return <DeleteAccountPage />;
      case '/download':
        return <DownloadPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F0] text-[#101412]">
      <Navbar />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
