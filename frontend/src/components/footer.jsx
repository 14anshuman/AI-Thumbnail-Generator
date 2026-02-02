import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const links = [
    { name: "Terms of Service", href: "#terms-of-service" },
    { name: "Privacy Policy", href: "#privacy-policy" },
    { name: "Security", href: "#security" },
    { name: "Sitemap", href: "#sitemap" },
  ];

  const handleSubmit=async(e)=>{
    e.preventDefault()
  }

  return (
    <motion.footer
      className="flex flex-col items-center px-4 md:px-16 lg:px-24 justify-center w-full pt-16 mt-40 glass border-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="contact"
    >
      <a href="/">
        <img
          src="src/assets/logo.svg"
          alt="logo"
          className="h-8.5 w-auto"
          width={205}
          height={48}
        />
      </a>

      {/* Contact Message Section */}
      <div className="w-full max-w-xl mt-10">
        <h3 className="text-lg font-semibold text-center mb-4">
          Reach out to us
        </h3>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-lg bg-white/10 px-4 py-2 text-sm text-white placeholder:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />

          <textarea
            rows={4}
            placeholder="Your message"
            className="w-full rounded-lg bg-white/10 px-4 py-2 text-sm text-white placeholder:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
          />

          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-2 rounded-lg bg-orange-50 px-4 py-2 text-sm  text-black hover:bg-gray-300 cursor-pointer transition"
          >
            Submit Message
          </button>
        </form>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap items-center justify-center gap-8 py-8">
        {links.map((link, index) => (
          <a key={index} href={link.href} className="transition hover:text-gray-300">
            {link.name}
          </a>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-6 pb-6">
        <a
          href="mailto:singhanshuman8182@gmail.com"
          className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300"
        >
          <Mail />
        </a>
        <a
          href="http://linkedin.com/in/ansingh14"
          className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300"
        >
          <LinkedinIcon />
        </a>
        <a
          href="#"
          className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://github.com/14anshuman"
          className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300"
        >
          <GithubIcon />
        </a>
      </div>

      <hr className="w-full border-white/20 mt-6" />

      <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 py-4">
        <p>Build thumbnails for free</p>
        <p>Copyright © 2026 All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
