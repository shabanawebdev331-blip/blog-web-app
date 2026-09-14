import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/blog/Blog';
import BlogPost from './pages/blog/BlogPost';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewBlog from './pages/blog/newblog/NewBlog';

const App = () => {
  return (
  <>
      <Navbar />

      <Routes>
        {/* Static routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* Blog routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/blog/newblog" element={<NewBlog />} />

        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>  
  )
}

export default App
