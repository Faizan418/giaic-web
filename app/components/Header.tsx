'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {

    function toggleMenu() {
        const stul = document.querySelector('ul');
          stul?.classList.toggle('active');

        }

  return (
    <div>
          <nav className="nav-bar">
        <div className="logo w-20 h-full"> 
          <Image src="/images/logo.png" alt="logo" width={80} height={10} />
        </div>

        <h2 className="navbar-h2">Tuition Free Education Proram on Latest Technologies</h2>

        <div className="hamburger" onClick={toggleMenu }>
          &#9776;
      </div>

        <ul className="ul-list gap-5">
         <Link href="/"><li>Home</li></Link>
         <Link href="/"><li>Apply</li></Link>
         <Link href="/"><li>Jobs</li></Link>
         <Link href="/"><li>Result</li></Link>
         <Link href="/"><li>Courses</li></Link>

        </ul>

      </nav>
    </div>
  )
}

