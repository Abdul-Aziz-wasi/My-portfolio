import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#0f172a] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">
          <span className="text-teal-400">Contact</span> Me
        </h2>

        <div className="space-y-6 text-lg">
          <div className="flex items-center justify-center gap-4">
            <FaEnvelope className="text-teal-400 text-2xl" />
            <a href="mailto:abdulaziz758015@email.com" className="hover:text-teal-300 transition">
              abdulaziz758015@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <FaPhone className="text-teal-400 text-2xl" />
            <a href="tel:+8801234567890" className="hover:text-teal-300 transition">
              +880 1910236673
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <FaWhatsapp className="text-teal-400 text-2xl" />
            <a
              href="https://wa.me/88 01854758015"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 transition"
            >
              WhatsApp: +88 01854758015
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
