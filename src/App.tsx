import { BrowserRouter, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import OurSpace from "@/pages/OurSpace";
import VisitContact from "@/pages/VisitContact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

/**
 * ArchWipe — the arch motif applied to route transitions: an amber-edged
 * steel curtain sweeps down and back up (arch-shaped clip) between pages
 * instead of a plain cut. Skipped on first load and under reduced motion.
 */
function ArchWipe() {
  const { pathname } = useLocation();
  const [reduced, setReduced] = useState(false);
  const isFirstRender = useRef(true);
  const [playKey, setPlayKey] = useState(0);

  useEffect(() => {
    setReduced(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setPlayKey((k) => k + 1);
  }, [pathname]);

  if (reduced || playKey === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden" aria-hidden="true">
      <motion.div
        key={playKey}
        className="absolute inset-0"
        style={{ background: "var(--color-primary)" }}
        initial={{ clipPath: "ellipse(65% 0% at 50% 0%)" }}
        animate={{
          clipPath: [
            "ellipse(65% 0% at 50% 0%)",
            "ellipse(90% 65% at 50% 0%)",
            "ellipse(65% 0% at 50% 0%)",
          ],
        }}
        transition={{ duration: 0.85, times: [0, 0.45, 1], ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.div
          className="absolute inset-x-0 top-0 h-1"
          style={{
            background: "linear-gradient(90deg, transparent, #E39A3B, transparent)",
            boxShadow: "0 0 20px 4px rgba(227,154,59,0.6)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.85, times: [0, 0.45, 1] }}
        />
      </motion.div>
    </div>
  );
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <ArchWipe />
        <div className="flex min-h-screen flex-col bg-surface text-primary">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/our-space" element={<OurSpace />} />
              <Route path="/visit" element={<VisitContact />} />

              {/* Redirects for old URLs */}
              <Route path="/about" element={<Navigate to="/our-space" replace />} />
              <Route path="/contact" element={<Navigate to="/visit" replace />} />

              {/* 404 Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer />
          <MobileActionBar />
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
