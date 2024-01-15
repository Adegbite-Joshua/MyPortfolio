'use client'

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import MyProjects from "@/components/projects/MyProjects";
import ScrollToTop from "@/components/ScrollToTop";

export default function Projects() {
  return (
    <div>
      <NavBar />
      <MyProjects/>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}
