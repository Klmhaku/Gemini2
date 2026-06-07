/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onScrollTo: (elementId: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '교육 소개', id: 'about' },
    { label: '기기 스펙', id: 'specs' },
    { label: '교육 과정', id: 'curriculum' },
    { label: '주요 실적', id: 'accomplishments' },
    { label: '문의 등록', id: 'inquiry' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Branding */}
        <div 
          onClick={() => onScrollTo('hero')}
          className="flex items-center space-x-3 cursor-pointer group"
          id="brand-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
            <Cpu className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-display font-bold text-slate-900 text-lg tracking-tight">GIGA ADMIN</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse"></span>
            </div>
            <p className="text-[10px] uppercase tracking-widest font-mono text-slate-400 font-semibold">
              아기구미 • 김하쿠를 사랑하는 아기구미
            </p>
          </div>
        </div>

        {/* Desktop Navbar Menu */}
        <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className="text-sm font-medium text-slate-600 hover:text-purple-600 hover:shadow-[0_4px_12px_rgba(124,58,237,0.05)] transition-all duration-300 px-3 py-1.5 rounded-lg cursor-pointer"
              id={`nav-link-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => onScrollTo('inquiry')}
            className="flex items-center space-x-2 bg-slate-950 text-white text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-xl border border-slate-800 hover:bg-purple-600 hover:border-purple-500 hover:scale-[1.02] shadow-sm transform transition-all duration-300 cursor-pointer"
            id="header-cta-btn"
          >
            <span>교육 문의</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-800 focus:outline-none rounded-lg hover:bg-slate-50 transition-colors"
          aria-label="Toggle Menu"
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 top-[72px] bg-white/95 backdrop-blur-md z-40 transition-all duration-300 animate-fadeIn"
          id="mobile-nav-panel"
        >
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onScrollTo(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left font-display font-semibold text-lg text-slate-800 hover:text-purple-600 hover:pl-2 transition-all duration-300 py-3 border-b border-slate-100"
                id={`mobile-nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onScrollTo('inquiry');
                setIsMobileMenuOpen(false);
              }}
              className="mt-6 w-full flex items-center justify-center space-x-2 bg-purple-600 text-white font-bold py-3.5 rounded-xl hover:bg-purple-700 transition-colors"
              id="mobile-cta-btn"
            >
              <span>지금 즉시 문의하기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
