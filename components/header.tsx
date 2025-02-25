"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 64;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setIsOpen(false);
    },
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = menuItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 200 && bottom >= 200) {
            setActiveSection(section);
          }
        }
      });

      // Update scroll progress
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Header Content */}
      <div className="relative  bg-bg_green shadow-sm">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="flex items-center gap-2 text-xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code2 className="h-6 w-6 text-white" />
              <span className="bg-clip-text text-white bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                Ruan Christian
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  className="relative px-3 text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`relative py-2 px-3 rounded-md transition-colors ${
                      activeSection === item.href.slice(1)
                        ? "text-primary_green font-medium"
                        : "text-white hover:text-primary_green"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-primary/100 rounded-md -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isOpen ? "close" : "menu"}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-full max-w-sm bg-background border-l shadow-2xl z-50 md:hidden"
            >
              <nav className="flex flex-col p-6">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.href}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`block py-4 px-6 text-lg rounded-lg transition-colors ${
                        activeSection === item.href.slice(1)
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
