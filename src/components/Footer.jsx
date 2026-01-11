// src/components/Footer.jsx
import React from "react";
import { FaYoutube, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/95 text-white border-t border-blue-500/30">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1 - Club Info */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-400 tracking-wide">
            WCE - EESA
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Electrical Engineering Students’ Association (EESA) – inspiring
            innovation, collaboration, and technical excellence since 1976.
          </p>
        </div>

        {/* Column 2 - Contact */}
        <div>
          <h2 className="text-xl font-semibold text-blue-400">Contact Us</h2>
          <p className="mt-4 text-white/70">
            Walchand College of Engineering, Sangli <br />
            Maharashtra, India
          </p>
          <p className="mt-2 text-blue-300 hover:text-blue-400 transition">
            Email:{" "}
            <a href="mailto:info.wceeesa@gmail.com">
              info.eesa@walchandsangli.ac.in
            </a>
          </p>
        </div>

        {/* Column 3 - Follow Us */}
        <div>
          <h2 className="text-xl font-semibold text-blue-400">Follow Us</h2>
          <div className="flex gap-6 mt-4 text-2xl">
            <a
              href="https://youtube.com/@wceeesa7666?si=1JO5f3kesdY2kwMQ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/wce_eesa?igsh=MW9md3E5ZGF4YXdkMQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/wce-eesa/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-blue-400">WCE - EESA (Web D - Nikshay.A.Balki)</span>. All
        rights reserved.
      </div>
    </footer>
  );
}
