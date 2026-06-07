/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Specs from './components/Specs';
import Curriculum from './components/Curriculum';
import Accomplishments from './components/Accomplishments';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

export default function App() {
  // Smooth scroll handler targeting element IDs for responsive navbar anchoring
  const handleScrollTo = (elementId: string) => {
    const target = document.getElementById(elementId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden antialiased">
      
      {/* Floating Header Navbar */}
      <Header onScrollTo={handleScrollTo} />

      {/* Main Single Page Sections */}
      <main className="relative">
        
        {/* Hero Section containing Spline 3D viewport & hud buttons */}
        <Hero onScrollTo={handleScrollTo} />

        {/* Brand Mission Statement & Giga Education Pedagogy */}
        <About />

        {/* Detailed Mechanical Specifications & Interactive Telemetry */}
        <Specs />

        {/* Curriculum Phases Timeline Block */}
        <Curriculum />

        {/* Dynamic Achievements & Filterable Accomplishments Hub */}
        <Accomplishments />

        {/* Interactive Inquiry Submissions with Live Local DB log */}
        <InquiryForm />

      </main>

      {/* Corporate Fine Details Footer */}
      <Footer onScrollTo={handleScrollTo} />

    </div>
  );
}
