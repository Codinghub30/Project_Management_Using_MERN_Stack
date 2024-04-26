import React from 'react'
import { Button, Navbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa'

const Header = () => {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark: text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Anup
            </span>
            Website
        </Link>
<div className='flex gap-2 md:order-2'>


<Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
    <FaMoon />
</Button>

<Link to="/signin">
    <Button gradientDuoTone='purpleToBlue' pill>
        Sign In
    </Button>
</Link>
<Navbar.Toggle />
</div>
<Navbar.Collapse>
    <Navbar.Link active={path === '/'} as={'div'}>
        <Link to='/'>Home</Link>
    </Navbar.Link>
    <Navbar.Link>
        <Link to='/' active={path === '/dashboard'} as={'div'}>Dashboard</Link>
    </Navbar.Link>
    <Navbar.Link>
        <Link to='/' active={path === '/about'} as={'div'}>
            About
        </Link>
    </Navbar.Link>
</Navbar.Collapse>
        </Navbar>
  )
}

export default Header
