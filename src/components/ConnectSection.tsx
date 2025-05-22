import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forlivium-red/20 to-transparent"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cherry-blossom absolute top-40 left-1/3 opacity-10 float" 
          style={{ animationDelay: '0.5s' }}></div>
        <div className="cherry-blossom absolute bottom-20 right-1/3 opacity-10 float" 
          style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-forlivium-black">Get In </span>
              <span className="text-forlivium-red">Touch</span>
            </h2>

          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="space-y-6">
              <p className="text-gray-700">
                Our support team is available to assist you with any questions or concerns you may have about Forlivium.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex justify-center items-center w-5 h-5 mr-2 text-forlivium-red flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                  </span>
                  <span className="text-gray-700">forlivium@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex justify-center items-center w-5 h-5 mr-2 text-forlivium-red flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </span>
                  <span className="text-gray-700">@forlivium</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;