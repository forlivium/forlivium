
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forlivium-red/20 to-transparent"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cherry-blossom absolute top-20 left-10 opacity-10 float"></div>
        <div className="cherry-blossom absolute bottom-40 right-20 opacity-10 float" 
          style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-forlivium-black">About </span>
            <span className="text-forlivium-red">Forlivium</span>
          </h2>
          <p className="text-lg text-gray-700">
            Forlivium is an Indonesian Web3 community. Whether you're hunting for the hottest Web3 jobs, chasing the next big airdrop, or diving into real-time updates and insightful member discussions — you've found your tribe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-forlivium-red/10 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-forlivium-red/10 flex items-center justify-center">
                <div className="cherry-blossom scale-75 opacity-60"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-forlivium-black">Web3 Jobs</h3>
              <p className="text-gray-600">
                Looking to break into the Web3 space or level up your career? We’ve got a curated list of remote-friendly, high-potential jobs from top crypto and blockchain projects. Get noticed, get hired, and build the future — one block at a time.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-forlivium-red/10 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-forlivium-red/10 flex items-center justify-center">
                <div className="web3-coin scale-50 opacity-60"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-forlivium-black">Airdrops</h3>
              <p className="text-gray-600">
                Don’t miss your shot at free crypto! We track and share legit, up-to-date airdrops so you can earn while exploring new projects. No fluff — just real opportunities to grow your wallet balance.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-forlivium-red/10 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-forlivium-red/10 flex items-center justify-center">
                <div className="torii-gate scale-50 opacity-60"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-forlivium-black">News & Tech</h3>
              <p className="text-gray-600">
                Stay in the loop with fresh updates, trends, and tech breakthroughs from across the Web3 world. From major protocol changes to hidden alpha, we break it down so you don’t miss a thing. Learn, discuss, and stay ahead of the game.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
