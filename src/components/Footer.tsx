
import React from 'react';
import { DiscordIcon } from '@/components/icons/DiscordIcon';
import { TelegramIcon } from '@/components/icons/TelegramIcon';

const Footer = () => {
  return (
    <footer className="bg-forlivium-black text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="wave-pattern text-forlivium-red/20 absolute top-0 left-0 w-full opacity-50 wave"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="favicon-32x32.png" alt="logo" />
              <span className="text-white text-xl font-medium">Forlivium</span>
            </div>
            <p className="text-gray-300 max-w-sm">
              An Indonesian Web3 community, bringing together blockchain enthusiasts worldwide.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-forlivium-red">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-forlivium-red transition-colors">About Us</a></li>
              <li><a href="#community" className="text-gray-300 hover:text-forlivium-red transition-colors">Community</a></li>
              <li><a href="#connect" className="text-gray-300 hover:text-forlivium-red transition-colors">Connect</a></li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-forlivium-red">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://discord.gg/ZP6jehQfBv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <DiscordIcon className="h-6 w-6" />
              </a>
              <a 
                href="https://t.me/Forlivium" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <TelegramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Forlivium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
