import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import CustomCursor from './components/CustomCursor';
import SketchModal from './components/SketchModal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState('portfolio'); // 'portfolio' | 'blog'
  const [currentArticleId, setCurrentArticleId] = useState(0);
  const [prefilledMessage, setPrefilledMessage] = useState('');
  const [modalData, setModalData] = useState(null);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      autoRaf: true,
      anchors: true,
    });

    window.lenis = lenis;

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // Lock background Lenis scroll when modal is open
  useEffect(() => {
    if (window.lenis) {
      if (modalData) {
        window.lenis.stop();
      } else {
        window.lenis.start();
      }
    }
  }, [modalData]);

  // Sync with URL query parameters for direct article linking
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const articleParam = urlParams.get('article');
      if (articleParam !== null) {
        const id = parseInt(articleParam, 10);
        setCurrentArticleId(isNaN(id) ? 0 : id);
        setCurrentView('blog');
      } else {
        setCurrentView('portfolio');
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenArticle = (id) => {
    setCurrentArticleId(id);
    setCurrentView('blog');
    window.history.pushState({ article: id }, '', `?article=${id}`);
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  const handleBackToPortfolio = (targetSectionId = 'blog') => {
    setCurrentView('portfolio');
    window.history.pushState({}, '', window.location.pathname);
    setTimeout(() => {
      const el = document.getElementById(targetSectionId);
      if (el) {
        if (window.lenis) {
          window.lenis.scrollTo(el, { offset: -70, duration: 1.15 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        if (window.lenis) {
          window.lenis.scrollTo(0, { duration: 1.15 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }, 50);
  };

  const handleSelectPlan = (planName) => {
    setPrefilledMessage(
      `Hi Faizan, I would like to get started with the ${planName} package. Here are the core details about my product: \n`
    );
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        if (window.lenis) {
          window.lenis.scrollTo(contactEl, { offset: -50, duration: 1.15 });
        } else {
          contactEl.scrollIntoView({ behavior: 'smooth' });
        }
        const msgField = document.getElementById('form-message');
        if (msgField) msgField.focus();
      }
    }, 100);
  };

  return (
    <>
      {/* Handcrafted Animated Cursor & Continuous Ink Trail */}
      <CustomCursor />

      {/* Global Sketch Modal Dialog */}
      <SketchModal modalData={modalData} onClose={() => setModalData(null)} />

      {currentView === 'blog' ? (
        <BlogPost
          articleId={currentArticleId}
          onBackToPortfolio={() => handleBackToPortfolio('blog')}
          onSelectArticle={(id) => {
            setCurrentArticleId(id);
            window.history.pushState({ article: id }, '', `?article=${id}`);
          }}
        />
      ) : (
        <>
          <Navbar onNavigateHome={(targetId) => handleBackToPortfolio(targetId)} />
          <main>
            <Hero onOpenModal={(data) => setModalData(data)} />
            <About />
            <Skills onOpenModal={(data) => setModalData(data)} />
            <Projects onOpenModal={(data) => setModalData(data)} />
            <Process />
            <Pricing onSelectPlan={handleSelectPlan} />
            <Blog onOpenArticle={handleOpenArticle} />
            <Contact prefilledMessage={prefilledMessage} onOpenModal={(data) => setModalData(data)} />
          </main>
          <Footer onNavigateHome={(targetId) => handleBackToPortfolio(targetId)} />
        </>
      )}
    </>
  );
}
