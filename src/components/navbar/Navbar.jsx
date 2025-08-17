import React from 'react'
import { IoMdMenu } from "react-icons/io";
import Logo  from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        path: "/",
    },
    {
        id: 2,
        title: "PMB",
        link: "https://pmb.ukdw.ac.id/"
    },
    {
        id: 3,
        title: "Hasil Seleksi",
        path: "/hasil-seleksi"
    },
    {
        id: 4,
        title: "Volunteer",
        path: "/volunteer"
    },
    {
        id: 5,
        title: "Kemahasiswaan",
        dropdown: [
            {
                id: 51,
                title: "Statistik Mahasiswa",
                path: "/statistik-mahasiswa"
            },
            {
                id: 52,
                title: "Sebaran Jurusan",
                path: "/sebaran-jurusan"
            }
        ]
    }
]
const Navbar = () => {
    return (
        <nav className="bg-[#008000] font-poppins shadow-sm">
            <div className="container py-0.5 flex justify-between items-center">
                {/* logo section */}
                <div className="flex items-center gap-3">
                    <Link to="/">
                        <img src={Logo} alt="Logo UKDW" className="h-20 w-20" />
                    </Link>
                    <div className="flex flex-col leading-tight">
                        <span className="font-sm font-semibold">UKDW</span>
                        <span className="text-sm font-semibold">Universitas Kristen</span>
                        <span className="text-sm font-semibold">Duta Wacana</span>
                    </div>
                </div>
                {/* Menu section */}
                <div className='hidden lg:block'>
                    <ul className='flex gap-4 text-md font-extralight'>
                        {NavbarMenu.map((menu) => (
                            <li key={menu.id} className="relative group">
                                {menu.path ?(
                                    <Link to={menu.path} className="inline-block py-2 px-1">
                                        {menu.title}
                                    </Link>
                                ):(
                                    <a href={menu.link} target="_blank" rel="noopener noreferrer" className="inline-block py-2 px-1">{menu.title}</a>
                                )}
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>
                    {/* <ul className="flex gap-4 text-md font-extralight">
                        {NavbarMenu.map((menu) => (
                            <li key={menu.id} className="relative group">
                                {menu.path ? (
                                    <Link
                                        to={menu.path}
                                        className="inline-block py-2 px-1 transition-colors duration-300 group-hover:text-secondary"
                                    >
                                        {menu.title}
                                    </Link>
                                ) : (
                                    <a
                                        href={menu.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block py-2 px-1 transition-colors duration-300 group-hover:text-secondary"
                                    >
                                        {menu.title}
                                    </a>
                                )}
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul> */}
                </div>
                {/* Dropdown section */}
                
                {/* Mobile Hamburger Menu section */}
                <div className='lg:hidden'>
                        <IoMdMenu className="text-4xl" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar