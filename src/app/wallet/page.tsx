'use client'; // If you need client-side logic like state or hooks

import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Header'; // Adjust the import path if needed
import Footer from '../../components/Footer'; // Import Footer component

const Watches = () => {
  const watchData = [
    { id: 1, name: 'Leather Wallet', price: 25, description: 'Premium leather wallet with multiple compartments.', image: '/image.png' },
    { id: 2, name: 'Minimalist Wallet', price: 20, description: 'Sleek and slim design for easy portability.', image: '/wallet1.jpg' },
    { id: 3, name: 'Travel Wallet', price: 22, description: 'Spacious travel wallet for documents and cash.', image: '/wallet2.jpg' },
    { id: 4, name: 'RFID Wallet', price: 28, description: 'Secure RFID-blocking wallet to protect your cards.', image: '/wallet3.jpg' },
    { id: 5, name: 'Trifold Wallet', price: 24, description: 'Compact trifold wallet with a classic design.', image: '/4.webp' },
    { id: 6, name: 'Zipper Wallet', price: 21, description: 'Stylish wallet with a secure zipper closure.', image: '/5.webp' },
    { id: 7, name: 'Coin Wallet', price: 23, description: 'Special pocket for coins and essentials.', image: '/6.webp' },
    { id: 8, name: 'Business Wallet', price: 30, description: 'Professional wallet with slots for cards and cash.', image: '/7.webp' },
    { id: 9, name: 'Canvas Wallet', price: 18, description: 'Durable canvas material with a casual vibe.', image: '/8.jpg' },
    { id: 10, name: 'Slim Card Holder', price: 26, description: 'Ultra-slim card holder for a minimalist look.', image: '/9.webp' },
    { id: 11, name: 'Vintage Wallet', price: 27, description: 'Classic vintage design with modern features.', image: '/10.webp' },
    { id: 12, name: 'Clutch Wallet', price: 25, description: 'Chic clutch wallet for a stylish touch.', image: '/11.jpg' },
    { id: 13, name: 'Passport Wallet', price: 32, description: 'Designed to hold your passport and essentials.', image: '/12.webp' },
    { id: 14, name: 'Checkbook Wallet', price: 24, description: 'Organized wallet for checkbooks and cards.', image: '/13.jpg' },
    { id: 15, name: 'Cardholder Wallet', price: 29, description: 'Simple cardholder with premium build quality.', image: '/14.jpg' },
    { id: 16, name: 'Money Clip Wallet', price: 23, description: 'Functional wallet with a sleek money clip.', image: '/15.webp' },
    { id: 17, name: 'Pouch Wallet', price: 28, description: 'Spacious pouch wallet for loose items.', image: '/16.webp' },
    { id: 18, name: 'Organizer Wallet', price: 35, description: 'Ultimate organizer with compartments for everything.', image: '/17.webp' },
    { id: 19, name: 'Bifold Wallet', price: 22, description: 'Classic bifold wallet with ample storage.', image: '/18.jpg' },
    { id: 20, name: 'Plastic Wallet', price: 18, description: 'Lightweight plastic wallet for casual use.', image: '/19.jpg' },
    { id: 21, name: 'Patterned Wallet', price: 24, description: 'Unique patterned design with a fashionable touch.', image: '/20.webp' },
    { id: 22, name: 'Eco-Friendly Wallet', price: 21, description: 'Made with sustainable materials for eco-conscious users.', image: '/21.webp' },
    { id: 23, name: 'Waterproof Wallet', price: 27, description: 'Durable and waterproof for adventurous lifestyles.', image: '/22.webp' },
    { id: 24, name: 'Colorful Wallet', price: 26, description: 'Bright and vibrant wallet to match your style.', image: '/23.webp' },
    
  ];

  return (
    <div className="container mx-auto py-8">
      {/* Navbar added here */}
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {watchData.map((watch) => (
          <div key={watch.id} className="bg-white p-4 rounded-lg shadow-lg">
            <Image 
              src={watch.image} 
              alt={watch.name} 
              width={500} 
              height={500} 
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-brown-800">{watch.name}</h3>
            <p className="text-gray-700 text-sm mb-4">{watch.description}</p>
            <div className="text-lg font-bold text-gray-700">${watch.price}</div>
            <button className="w-full mt-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
              Add to cart
            </button>
          </div>
        ))}
      </div>

      {/* Footer added here */}
      <Footer />
    </div>
  );
};

export default Watches;



