'use client'
import { useEffect, useState } from 'react'
import AboutUsArea from "@/components/about-us-area/AboutUsArea";
import SkillProgress from "@/components/skill-progress/SkillProgress";
import BannerProduct from "@/components/banner-product/BannerProduct";
import TeamSection from "@/components/team-section/TeamSection";
import CompanyLogoSection from "@/components/company-logo-section/CompanyLogoSection";
import Header from '@/components/header/Header';
import Footer from '@/components/footer/footer';

const AboutUsPage =()=> {
  return(
    <>
      <Header />
      <AboutUsArea />
      <SkillProgress />
      <BannerProduct />
      <TeamSection />
      <CompanyLogoSection />
      <Footer />
    </>
  )
}
export default AboutUsPage;