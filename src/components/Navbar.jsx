import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
    const [scrolled, setscrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
            setscrolled(true)
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll );
    })

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : "not-scrolled"}`}>
        <div className='inner'>
            <a className='logo' href="#hero">
                Rahul | JSM
            </a>
            <nav className='desktop'>
                <ul>
                    {
                        navLinks?.map(({link, name}) => (
                            <li key={name} className='group'>
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                                

                            </li>
                        ))
                    }
                </ul>
            </nav>
            <a href='#contact' className='contact-btn group'>
                <div className='inner'>
                    <span>Contact Me</span>

                </div>

            </a>

        </div>

    </header>
  )
}

export default Navbar