'use client';

import { useState, useRef, useCallback, useEffect, forwardRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFFlipBookProps {
  pdfUrl: string;
}

interface FlipBookRef {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
    getCurrentPageIndex: () => number;
  };
}

interface PageComponentProps {
  pageNumber: number;
  width: number;
  height: number;
  onLoadSuccess?: (page: { width: number; height: number }) => void;
}

const PageComponent = forwardRef<HTMLDivElement, PageComponentProps>(
  ({ pageNumber, width, height, onLoadSuccess }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-[#f8f6f0] overflow-hidden"
        style={{ width, height }}
      >
        <Page
          pageNumber={pageNumber}
          width={width}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          onLoadSuccess={onLoadSuccess}
        />
      </div>
    );
  }
);

PageComponent.displayName = 'PageComponent';

export default function PDFFlipBook({ pdfUrl }: PDFFlipBookProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 400, height: 300 });
  const [aspectRatio, setAspectRatio] = useState(1.333); // Default, will be updated
  const [isFullscreen, setIsFullscreen] = useState(false);
  const flipBookRef = useRef<FlipBookRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const onDocumentLoadSuccess = async ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const onFirstPageLoadSuccess = ({ width, height }: { width: number; height: number }) => {
    const ratio = height / width;
    setAspectRatio(ratio);
    updateDimensionsWithRatio(ratio, isFullscreen);
  };

  const updateDimensionsWithRatio = useCallback((ratio: number, fullscreen: boolean) => {
    if (fullscreen) {
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const isMobile = viewportWidth < 768;
      // Leave space for controls
      const availableHeight = viewportHeight - 140;
      const pageHeight = Math.min(availableHeight, 800);
      const pageWidth = pageHeight / ratio;
      // For desktop spread view, ensure we don't exceed viewport
      const maxWidth = isMobile ? viewportWidth - 32 : (viewportWidth - 80) / 2;
      const finalWidth = Math.min(pageWidth, maxWidth);
      const finalHeight = finalWidth * ratio;
      setDimensions({ width: finalWidth, height: finalHeight });
    } else if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const isMobile = window.innerWidth < 768;
      const pageWidth = isMobile
        ? Math.min(containerWidth - 32, 400)
        : Math.min((containerWidth - 64) / 2, 350);
      const pageHeight = pageWidth * ratio;
      setDimensions({ width: pageWidth, height: pageHeight });
    }
  }, []);

  const updateDimensions = useCallback(() => {
    updateDimensionsWithRatio(aspectRatio, isFullscreen);
  }, [aspectRatio, isFullscreen, updateDimensionsWithRatio]);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  // Handle escape key to exit fullscreen
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isFullscreen]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const flipNext = () => {
    flipBookRef.current?.pageFlip()?.flipNext();
  };

  const flipPrev = () => {
    flipBookRef.current?.pageFlip()?.flipPrev();
  };

  const onFlip = useCallback((e: { data: number }) => {
    setCurrentPage(e.data);
  }, []);

  const content = (
    <div className={`flex flex-col items-center ${isFullscreen ? 'justify-center min-h-screen' : ''}`}>
      {/* Flip Book */}
      <div
        className="relative bg-[#2a2a2a] p-4 md:p-8 rounded-sm overflow-hidden"
        style={{
          boxShadow: 'inset 0 0 30px rgba(0,0,0,0.3), 0 10px 40px rgba(0,0,0,0.2)'
        }}
      >
        {/* @ts-ignore - react-pageflip types are incomplete */}
        <HTMLFlipBook
          ref={flipBookRef}
          width={dimensions.width}
          height={dimensions.height}
          size="fixed"
          minWidth={280}
          maxWidth={isFullscreen ? 600 : 500}
          minHeight={400}
          maxHeight={isFullscreen ? 900 : 700}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onFlip}
          className="shadow-2xl"
          style={{}}
          startPage={0}
          drawShadow={true}
          flippingTime={600}
          usePortrait={window.innerWidth < 768}
          startZIndex={0}
          autoSize={false}
          maxShadowOpacity={0.5}
          showPageCorners={true}
          disableFlipByClick={false}
          swipeDistance={30}
          clickEventForward={true}
          useMouseEvents={true}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <PageComponent
              key={index}
              pageNumber={index + 1}
              width={dimensions.width}
              height={dimensions.height}
              onLoadSuccess={index === 0 ? onFirstPageLoadSuccess : undefined}
            />
          ))}
        </HTMLFlipBook>
      </div>

      {/* Navigation Controls */}
      <div className={`flex items-center justify-center gap-6 mt-8 ${isFullscreen ? 'text-gray-300' : ''}`}>
        <button
          onClick={flipPrev}
          disabled={currentPage === 0}
          className={`p-3 ${isFullscreen ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-[#c4342e]'} disabled:opacity-30 disabled:cursor-not-allowed transition-colors`}
          aria-label="Previous page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className={`font-serif text-sm md:text-base ${isFullscreen ? 'text-gray-300' : 'text-gray-600'}`}>
          {currentPage + 1} / {numPages}
        </span>

        <button
          onClick={flipNext}
          disabled={currentPage >= numPages - 1}
          className={`p-3 ${isFullscreen ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-[#c4342e]'} disabled:opacity-30 disabled:cursor-not-allowed transition-colors`}
          aria-label="Next page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Fullscreen toggle */}
        <button
          onClick={toggleFullscreen}
          className={`p-3 ${isFullscreen ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-[#c4342e]'} transition-colors`}
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        >
          {isFullscreen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          )}
        </button>
      </div>

      {/* Hint text */}
      <p className={`text-sm mt-4 text-center font-serif italic ${isFullscreen ? 'text-gray-400' : 'text-gray-500'}`}>
        {isFullscreen ? 'Press Esc to exit fullscreen' : 'Click corners or use arrows to flip'}
      </p>
    </div>
  );

  return (
    <div ref={containerRef} className="w-full">
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="flex items-center justify-center h-[60vh]">
            <div className="text-gray-600 font-serif text-lg">Loading programme...</div>
          </div>
        }
        error={
          <div className="flex items-center justify-center h-[60vh]">
            <div className="text-gray-600 font-serif text-lg">Unable to load PDF</div>
          </div>
        }
      >
        {numPages > 0 && (
          isFullscreen ? (
            <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
              {content}
            </div>
          ) : (
            content
          )
        )}
      </Document>
    </div>
  );
}
