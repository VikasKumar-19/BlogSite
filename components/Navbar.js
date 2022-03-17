import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="sticky top-0 w-full bg-[#f5f6fa] shadow-lg">
        <ul className="list-none flex justify-center gap-8 text-xl font-medium px-2 ">
          <Link href='/'>
            <a className="py-8 px-3 outline-none"><li>Home</li></a>
          </Link>
          <Link href='/blogposts'>
            <a className="py-8 px-3 outline-none"><li>Blogs</li></a>
          </Link>
          <Link href='/about'>
            <a className="py-8 px-3 outline-none"><li>About Us</li></a>
          </Link>
          <Link href='/contact'>
            <a className="py-8 px-3 outline-none"><li>Contact Us</li></a>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar