import { useState, useEffect} from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return() => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className='navbar py-7 flex items-center justify-between'>
      <div className="logo">
        <h1 className='text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white'>Portofolio</h1>
      </div>
      <ul className={`menu flex items-center sm:gap-10 gap-4 fixed left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:-translate-x-0 md:static md:opacity-100 md:bg-transparent transition-all md:transition-none duration-500 ease-in-out z-40 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
        <li><a className='sm:text-lg text-base font-medium' href="#beranda">Beranda</a></li>
        <li><a className='s   m:text-lg text-base font-medium' href="#tentang">Tentang</a></li>
        <li><a className='sm:text-lg text-base font-medium' href="#proyek">Proyek</a></li>
        <li><a className='sm:text-lg text-base font-medium' href="#kontak">Kontak</a></li>
      </ul>
    </div>
  )
}

export default Navbar