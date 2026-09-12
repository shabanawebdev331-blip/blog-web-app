import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'

const Header = () => {
  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About us', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Categories', path: '/categories' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Categories',
      links: [
        { name: 'Lifestyle', path: '/category/lifestyle' },
        { name: 'Travel', path: '/category/travel' },
        { name: 'Technology', path: '/category/technology' },
        { name: 'Business', path: '/category/business' },
        { name: 'Health', path: '/category/health' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Documentation', path: '/docs' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Terms & Conditions', path: '/terms' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Contact Us', path: '/contact' },
      ],
    },
  ]
  return (
    <div className='grid md:grid-cols-5 grid-cols-1 gap-6 bg-gray-950 text-white p-10 mt-5'>
      <div>
        <Logo className='my-3' />
        <p className='text-sm'>
          Welcome to Blogsy, a place where ideas, stories, and knowledge come to life. Create and share engaging blog posts, explore new perspectives, and connect with readers from around the world. Start writing today and let your voice be heard!
        </p>
      </div>
      {footerLinks.map(({ title, links }, i) => (
        <div key={i}>
          <h2 className=''>{title}</h2>
          <ul>
            {links.map(({ name, path }, index) => (
              <li key={index}>
                <Link className='text-sm' to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <span className='flex gap-2 my-2 text-sm'><MapPin /><p>23 Inspiration street New York NY, USA</p></span>
        <span className='flex gap-2 my-2 text-sm'><Phone /><p>+1 234 567 890</p></span>
        <span className='flex gap-2 my-3 text-sm'><Mail /><p>abc@xyz.com</p></span>
      </div>
    </div>
  )
}

export default Header
