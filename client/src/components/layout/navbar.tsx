import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { LanguageSelector } from "@/components/ui/language-selector";
import logoImage1 from "@assets/Absouts Logo Transparent 01_1757063958530.png";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Show navbar when scrolling up, hide when scrolling down
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/career", label: "Career" },
    { path: "/contact", label: "Contact Us" },
  ];

  const isActiveLink = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      data-testid="navbar"
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo - Left (Small and Minimal) */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center" data-testid="logo-link">
              <img src={logoImage1} alt="Absouts Logo" className="h-6 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation - Center Pill Container */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="bg-gray-100/20 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)] border border-gray-200/30 px-8 py-3 flex items-center gap-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-light tracking-wide transition-all duration-200 whitespace-nowrap ${
                    isActiveLink(item.path)
                      ? "text-brand-secondary font-medium"
                      : "text-text-primary hover:text-brand-accent hover:opacity-70"
                  }`}
                  data-testid={`nav-link-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Selector - Right (Soft Rounded) */}
          <div className="hidden md:flex items-center">
            <LanguageSelector />
          </div>

          {/* Mobile: Logo + Hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-gray-100" data-testid="mobile-menu-button">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col space-y-6 mt-12">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`block px-4 py-3 text-base font-light tracking-wide transition-colors rounded-lg ${
                        isActiveLink(item.path)
                          ? "text-brand-secondary font-medium bg-brand-accent/5"
                          : "text-text-primary hover:text-brand-accent hover:bg-bg-section"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`mobile-nav-${item.label.toLowerCase().replace(" ", "-")}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="px-4 pt-4 border-t border-gray-100">
                    <LanguageSelector />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
