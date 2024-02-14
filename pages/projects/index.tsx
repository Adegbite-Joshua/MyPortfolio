'use client'

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import MyProjects from "@/components/projects/MyProjects";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    document.title = 'Projects | Joshua Adegbite';
  }, [])
  return (
    <div>
      <NavBar />
      <MyProjects/>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}
