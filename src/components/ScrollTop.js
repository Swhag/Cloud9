import React, { useState, useEffect } from 'react';

function ScrollTop(props) {
  const { pageContainerRef } = props;
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);

  const handleBackToTopClick = () => {
    pageContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = pageContainerRef.current.scrollTop;
      const screenHeight = window.innerHeight;
      setShowBackToTopButton(scrollPosition > screenHeight);
    };
    pageContainerRef.current.addEventListener('scroll', handleScroll);
    return () =>
      pageContainerRef.current.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showBackToTopButton && (
        <div className='back-to-top-button' onClick={handleBackToTopClick}>
          <i className='fa-solid fa-chevron-up'></i>
        </div>
      )}
    </>
  );
}

export default ScrollTop;
