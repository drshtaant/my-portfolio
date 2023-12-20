"use client";
import React from 'react';
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import About from '@/components/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import WorkSection from '@/components/WorkSection';
import Testimonials from '@/components/Testimonials';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {

  
  return (
    <>
      <Navbar  />
      <HeroSection />
      <About  />
      <Skills />
      <Education/>
      <Experience/>
      <WorkSection />
      <Testimonials />
      <Blogs />
      <Contact />
      <Footer />
    </>
  )
}
