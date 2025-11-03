import React, { useEffect, useState } from 'react';
import { ArrowUpIcon } from 'lucide-react';
export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  if (!isVisible) {
    return null;
  }
  return <div className="scroll-to-top" onClick={scrollToTop}>
      <ArrowUpIcon />
    </div>;
}