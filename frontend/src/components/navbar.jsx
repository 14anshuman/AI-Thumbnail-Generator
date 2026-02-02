import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const {isAuthenticated,user,logout}=useAuth();

  const navigate=useNavigate();
  
  const links = [
    
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#howitworks" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        className={`sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 md:px-16 lg:px-24 transition-colors ${isScrolled ? "bg-white/15 backdrop-blur-lg" : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
        <Link to="/">
          <img src="/src/assets/logo.svg" alt="logo" className="h-8.5 w-auto" />
        </Link>

        <div className="hidden items-center space-x-10 md:flex">
          {isAuthenticated ? (
            <>
              <Link to="/" className="transition hover:text-gray-300">
                Home
              </Link>
              <Link to="/generate" className="transition hover:text-gray-300">
                Generate
              </Link>
              <Link to="/my-generations" className="transition hover:text-gray-300">
                My Generations
              </Link>
              <Link to="/profile" className="btn glass">
                Profile
              </Link>
              <button onClick={logout} className="btn glass">
                Logout
              </button>
            </>
          ) : (
            <>
             <Link to="/" className="transition hover:text-gray-300">
      Home
    </Link>
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition hover:text-gray-300"
                >
                  {link.name}
                </a>
              ))}
              <button onClick={()=>navigate('/login')} className="btn glass">
                Login
              </button>
            </>
          )}
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="transition active:scale-90 md:hidden"
        >
          <MenuIcon className="size-6.5" />
        </button>
      </motion.nav>

      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {isAuthenticated ? (
            <>
              <Link to="/" className="transition hover:text-gray-300">
                Home
              </Link>
              <Link to="/generate" className="transition hover:text-gray-300">
                Generate
              </Link>
              <Link to="/my-generations" className="transition hover:text-gray-300">
                My Generations
              </Link>
              <Link to="/profile" className="btn glass">
                Profile
              </Link>
               <button onClick={()=>{logout; setIsOpen(false); }} className="btn glass">
                Logout
              </button>
            </>
          ) : (
            <>
             <Link to="/" className="transition hover:text-gray-300" onClick={() => setIsOpen(false)}>
      Home
    </Link>
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="transition hover:text-gray-300"
                >
                  {link.name}
                </a>
              ))}
               <button
  onClick={() => {
    navigate("/login");
    setIsOpen(false);
  }}
  className="btn glass"
>
  Login
</button>
            </>
          )}

        <button
          onClick={() => setIsOpen(false)}
          className="rounded-md p-2 glass cursor-pointer"
        >
          <XIcon />
        </button>
      </div>
    </>
  );
}
