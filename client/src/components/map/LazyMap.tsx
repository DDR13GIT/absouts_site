import { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface LazyMapProps {
  src: string;
  title?: string;
  className?: string;
}

export function LazyMap({ src, title = "Map", className = "" }: LazyMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Stop observing once loaded
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before the map comes into view
        threshold: 0.01
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {!isInView ? (
        // Placeholder - lightweight fallback before map loads
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <p className="text-text-secondary font-medium">Loading map...</p>
          </div>
        </div>
      ) : (
        <>
          {/* Loading overlay - shows while iframe is loading */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center z-10 animate-pulse">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="h-8 w-8 text-white animate-bounce" />
                </div>
                <p className="text-text-secondary font-medium">Loading interactive map...</p>
              </div>
            </div>
          )}

          {/* Actual iframe - only rendered when in view */}
          <iframe
            src={src}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={title}
            onLoad={() => setIsLoaded(true)}
            className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </>
      )}
    </div>
  );
}
